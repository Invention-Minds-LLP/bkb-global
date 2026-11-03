import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

export type RevealFrom = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'zoom-out' | 'flip';

/*
 * One shared scroll check for every pending element. IntersectionObserver does the
 * normal work; this safety net catches elements the page jumped past (menu links,
 * scroll restoration), which never report an intersection change.
 */
const pending = new Set<HTMLElement>();
let listening = false;
let frame = 0;

function reveal(el: HTMLElement): void {
  el.classList.add('is-revealed');
  pending.delete(el);
}

function sweep(): void {
  frame = 0;
  const limit = window.innerHeight * 0.95;
  for (const el of pending) {
    if (el.getBoundingClientRect().top < limit) reveal(el);
  }
}

function listen(): void {
  if (listening) return;
  listening = true;
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(sweep);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

/**
 * Scroll-triggered entrance, in the manner of AOS: elements fade in from below,
 * above, the left or the right, or zoom in, as they enter the viewport.
 *
 *   <div appReveal>                          fade up
 *   <div appReveal="150" revealFrom="left">  slide in from the left after 150ms
 *
 * Content is visible by default: the effect only arms when scripting runs, motion
 * is allowed and the element starts below the fold, so nothing is ever hidden.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnDestroy {
  /** Optional stagger in milliseconds. */
  readonly appReveal = input<number | string>('');
  /** Direction the element enters from. */
  readonly revealFrom = input<RevealFrom>('up');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
      if (this.host.getBoundingClientRect().top < window.innerHeight * 0.92) return;

      const delay = Number(this.appReveal()) || 0;
      if (delay) this.host.style.setProperty('--reveal-delay', `${delay}ms`);
      this.host.dataset['reveal'] = this.revealFrom();
      this.host.classList.add('reveal-armed');
      pending.add(this.host);
      listen();

      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting || e.boundingClientRect.bottom < 0)) {
            reveal(this.host);
            this.observer?.disconnect();
          }
        },
        // Fire once 12% of the element shows, so items at the very bottom of the page still reveal.
        { threshold: 0.12 },
      );
      this.observer.observe(this.host);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    pending.delete(this.host);
  }
}
