import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

/**
 * Fades an element up as it enters the viewport. Content is visible by default:
 * the effect only arms when scripting runs, motion is allowed and the element is
 * still below the fold, so nothing is ever hidden from a reader.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnDestroy {
  /** Optional stagger in milliseconds. */
  readonly appReveal = input<number | string>('');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
      if (this.host.getBoundingClientRect().top < window.innerHeight * 0.92) return;

      const delay = Number(this.appReveal()) || 0;
      if (delay) this.host.style.setProperty('--reveal-delay', `${delay}ms`);
      this.host.classList.add('reveal-armed');
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this.host.classList.add('is-revealed');
            this.observer?.disconnect();
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      );
      this.observer.observe(this.host);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
