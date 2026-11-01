import { Directive, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

/**
 * Figures construct themselves stroke by stroke when they scroll into view.
 * The figure is fully drawn by default; the directive only arms the effect
 * when scripting runs, motion is allowed, and the figure is still off-screen.
 */
@Directive({ selector: '[appDraw]' })
export class DrawDirective implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced || !('IntersectionObserver' in window)) return;

      const rect = this.host.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight * 0.85;
      this.host.classList.add('draw-armed');
      if (alreadyVisible) {
        requestAnimationFrame(() => this.host.classList.add('is-drawn'));
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this.host.classList.add('is-drawn');
            this.observer?.disconnect();
          }
        },
        { rootMargin: '0px 0px -15% 0px' },
      );
      this.observer.observe(this.host);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
