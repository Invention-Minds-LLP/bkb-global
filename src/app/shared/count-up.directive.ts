import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

/**
 * Counts a number up from zero when it scrolls into view. The final value is
 * rendered in the template, so screen readers, search engines and reduced-motion
 * users always get the real figure.
 */
@Directive({ selector: '[appCountUp]' })
export class CountUpDirective implements OnDestroy {
  readonly appCountUp = input.required<number>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;
  private frame = 0;

  constructor() {
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
      const target = this.appCountUp();
      const decimals = Number.isInteger(target) ? 0 : 1;
      this.observer = new IntersectionObserver((entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        this.observer?.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          this.host.textContent = (target * eased).toFixed(decimals);
          if (t < 1) this.frame = requestAnimationFrame(tick);
        };
        this.frame = requestAnimationFrame(tick);
      }, { threshold: 0.6 });
      this.observer.observe(this.host);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frame);
  }
}
