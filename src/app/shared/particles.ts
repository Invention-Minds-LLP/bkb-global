import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Learning icons drawn on a 24-unit grid as thin outlines: book, bulb, pencil, cap, globe, flask, star. */
const ICONS = [
  'M3 6c3-1.6 6-1.6 9 0 3-1.6 6-1.6 9 0v12c-3-1.6-6-1.6-9 0-3-1.6-6-1.6-9 0zM12 6v12',
  'M9.5 17.5h5M10.5 20.5h3M12 3a6 6 0 0 0-3.9 10.6c.8.7 1.3 1.6 1.4 2.9h5c.1-1.3.6-2.2 1.4-2.9A6 6 0 0 0 12 3z',
  'M4 20l1.2-4.2L15.8 5.2a1.8 1.8 0 0 1 2.6 0l.4.4a1.8 1.8 0 0 1 0 2.6L8.2 18.8zM14 7l3 3',
  'M2 9.5l10-5 10 5-10 5zM6 11.5v4.5c3.5 2.6 8.5 2.6 12 0v-4.5M22 9.5v5.5',
  'M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18zM3 12h18M12 3c3.2 3.4 3.2 14.6 0 18M12 3c-3.2 3.4-3.2 14.6 0 18',
  'M9 3h6M10 3v6l-5 8.6A2.2 2.2 0 0 0 7 21h10a2.2 2.2 0 0 0 2-3.4L14 9V3M7.5 15h9',
  'M12 3.5l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z',
];

interface Floater {
  x: number;
  y: number;
  size: number;
  icon: number;
  vx: number;
  vy: number;
  angle: number;
  spin: number;
  alpha: number;
  phase: number;
}

/**
 * A layer of small learning icons (books, bulbs, pencils, caps, globes, flasks, stars)
 * floating slowly behind a section's content. The host fills its positioned parent.
 * Animation runs only while the layer is on screen; with reduced motion a single
 * still frame is drawn instead.
 */
@Component({
  selector: 'app-particles',
  template: '<canvas aria-hidden="true"></canvas>',
  styles: `
    :host { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
    canvas { display: block; width: 100%; height: 100%; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Particles {
  /** Icon colour as an "r, g, b" triplet. */
  readonly rgb = input('201, 162, 76');
  /** Icons per 100,000 square pixels. */
  readonly density = input(1);
  /** Peak opacity of the most visible icon. */
  readonly opacity = input(0.5);
  /** Scales icon size (1 = 22 to 42 px). */
  readonly scale = input(1);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const canvas = this.host.querySelector('canvas')!;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const paths = ICONS.map((d) => new Path2D(d));
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let floaters: Floater[] = [];
      let width = 0;
      let height = 0;
      let frame = 0;
      let visible = false;
      let last = 0;

      const spawn = (i: number): Floater => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: (22 + Math.random() * 20) * this.scale(),
        icon: i % ICONS.length,
        vx: (Math.random() - 0.5) * 0.14,
        vy: -(0.06 + Math.random() * 0.16),
        angle: (Math.random() - 0.5) * 0.6,
        spin: (Math.random() - 0.5) * 0.0016,
        alpha: 0.45 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
      });

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = this.host.clientWidth;
        height = this.host.clientHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.max(4, Math.min(28, Math.round(((width * height) / 100000) * this.density())));
        floaters = Array.from({ length: count }, (_, i) => spawn(i));
        draw(0);
      };

      const draw = (time: number) => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, width, height);
        const peak = this.opacity();
        const colour = this.rgb();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (const f of floaters) {
          const pulse = reduced ? 1 : 0.7 + 0.3 * Math.sin(time / 1800 + f.phase);
          const k = f.size / 24;
          ctx.setTransform(dpr * k * Math.cos(f.angle), dpr * k * Math.sin(f.angle), -dpr * k * Math.sin(f.angle), dpr * k * Math.cos(f.angle), dpr * f.x, dpr * f.y);
          ctx.translate(-12, -12);
          ctx.lineWidth = 1.6 / k;
          ctx.strokeStyle = `rgba(${colour}, ${(f.alpha * pulse * peak).toFixed(3)})`;
          ctx.stroke(paths[f.icon]);
        }
      };

      const step = (time: number) => {
        const dt = Math.min(48, time - (last || time)) / 16.7;
        last = time;
        for (const f of floaters) {
          f.x += f.vx * dt;
          f.y += f.vy * dt;
          f.angle += f.spin * dt;
          if (f.y < -f.size) { f.y = height + f.size; f.x = Math.random() * width; }
          if (f.x < -f.size) f.x = width + f.size;
          if (f.x > width + f.size) f.x = -f.size;
        }
        draw(time);
        frame = visible ? requestAnimationFrame(step) : 0;
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(this.host);
      resize();

      let intersection: IntersectionObserver | undefined;
      if (!reduced) {
        intersection = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !frame) { last = 0; frame = requestAnimationFrame(step); }
        });
        intersection.observe(this.host);
      }

      destroyRef.onDestroy(() => {
        resizeObserver.disconnect();
        intersection?.disconnect();
        cancelAnimationFrame(frame);
      });
    });
  }
}
