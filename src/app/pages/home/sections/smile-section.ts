import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { Particles } from '../../../shared/particles';
import { RevealDirective } from '../../../shared/reveal.directive';

/* BKG-SMILE: the five fundamental principles of the school's curriculum (Curriculum page). */
const SMILE = [
  { letter: 'S', title: 'Spiritual resilience', text: 'Yoga, meditation, Saraswati Vandana and the chanting of slokas bring calm and focus to the day.',
    detail: 'Aksharabhyasa, Agnihotram, pranayama, meditation with instrumental music' },
  { letter: 'M', title: 'Mental intelligence', text: 'Questioning, enquiry and independent thinking, with a scientific, solution-oriented outlook.',
    detail: 'Seminars, debates, quizzes, research, self and peer assessment' },
  { letter: 'I', title: 'Infrastructure & facilities', text: 'Smart classrooms, science and English language labs, and a 4.5-acre playing area.',
    detail: '17-acre campus, swimming pool, basketball and tennis courts' },
  { letter: 'L', title: 'Laboratory-based teaching', text: 'Experiments, models, research and exploration: children learn by doing.',
    detail: 'Montessori lab, science hub, model making, field visits' },
  { letter: 'E', title: 'Emotional intelligence', text: 'Visual and performing arts, life skills and pastoral care for confident, happy children.',
    detail: 'Arts, drama, puppetry, counselling, life-skill studio' },
];

@Component({
  selector: 'app-smile-section',
  imports: [Particles, RevealDirective],
  template: `
    <section class="smile has-particles" aria-labelledby="smile-title"
      (mouseenter)="hovering = true" (mouseleave)="hovering = false">
      <app-particles [density]="1" [opacity]="0.55" />
      <div class="wrap">
        <h2 class="section-title center light" id="smile-title" appReveal revealFrom="zoom">The BKG-SMILE way of education</h2>
        <p class="section-lede center light" appReveal="120">Five fundamental principles shape how every child learns at BKG.</p>

        <div class="word" aria-hidden="true">
          <span class="rail"><span class="rail-fill" [style.width.%]="(active() + 1) * 20"></span></span>
          @for (p of smile; track p.letter; let i = $index) {
            <span class="big" [class.on]="i === active()" [style.--i]="i">{{ p.letter }}</span>
          }
        </div>

        <ul class="grid">
          @for (p of smile; track p.letter; let i = $index) {
            <li appReveal="{{ i * 110 }}" [revealFrom]="i % 2 === 0 ? 'up' : 'down'"
              [class.on]="i === active()" tabindex="0"
              (mouseenter)="select(i)" (focus)="select(i)">
              <span class="tag" aria-hidden="true">{{ p.letter }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
              <p class="detail">{{ p.detail }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './smile-section.css',
})
export class SmileSection {
  protected readonly smile = SMILE;
  protected readonly active = signal(1);
  protected hovering = false;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let visible = false;
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.3 });
      io.observe(this.host);
      // A slow spotlight moves across S-M-I-L-E while the section is on screen and not being explored.
      const timer = setInterval(() => {
        if (visible && !this.hovering) this.active.update((i) => (i + 1) % SMILE.length);
      }, 3200);
      destroyRef.onDestroy(() => {
        io.disconnect();
        clearInterval(timer);
      });
    });
  }

  protected select(i: number): void {
    this.active.set(i);
  }
}
