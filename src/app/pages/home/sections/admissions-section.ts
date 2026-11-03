import { Component, input } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';
import { StageOption, VisitForm } from '../visit-form';

/* The school's published admission procedure. */
const STEPS = [
  { title: 'Application', text: 'Download the application form, fill it in and pay the application fee online. Cash is not accepted.' },
  { title: 'Entrance test', text: 'English, Mathematics, Language and Intelligence, for Classes I to IX.' },
  { title: 'Interview', text: 'The child and parents meet the school, followed by a medical examination.' },
  { title: 'Admission', text: 'Pay the school fee and collect your child’s kit from the front office.' },
];

@Component({
  selector: 'app-admissions-section',
  imports: [RevealDirective, VisitForm],
  template: `
    <section class="admissions" id="admissions" aria-labelledby="admissions-title">
      <div class="wrap grid">
        <div appReveal>
          <h2 class="section-title" id="admissions-title">Admissions 2026–27</h2>
          <p class="section-lede">BKG admits students from Pre-KG to Class IX on the basis of the entrance examination
            and an interview.</p>
          <ol class="steps">
            @for (s of steps; track s.title; let i = $index) {
              <li>
                <span class="num" aria-hidden="true">0{{ i + 1 }}</span>
                <div><h3>{{ s.title }}</h3><p>{{ s.text }}</p></div>
              </li>
            }
          </ol>
          <div class="actions">
            <a class="btn btn-navy" href="https://bkgglobalschool.com/admissions/">Admission procedure</a>
            <a class="btn btn-outline" href="https://bkgglobalschool.com/fees-structure/">Fee structure</a>
          </div>
        </div>

        <aside class="form-card gold-cap" appReveal="150" aria-labelledby="visit-title">
          <h3 id="visit-title">Plan a campus visit</h3>
          <p>See the campus, meet the teachers and ask about residential life.</p>
          <app-visit-form idPrefix="visit" [stages]="stages()" />
        </aside>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .admissions { padding: var(--space-6) var(--gutter); }
    .grid {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
      gap: clamp(40px, 6vw, 96px);
      align-items: start;
    }
    .steps { margin: var(--space-4) 0 0; padding: 0; list-style: none; }
    .steps li {
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: var(--space-2);
      padding: 20px 0;
      border-top: 1px solid var(--line);
    }
    .num { font-family: var(--font-serif); font-size: 28px; font-weight: 600; line-height: 1.1; color: var(--gold-deep); }
    .steps h3 { font-size: 21px; }
    .steps p { margin-top: 4px; color: var(--ink-soft); }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: var(--space-4); }
    .form-card {
      position: sticky;
      top: 110px;
      padding: clamp(24px, 3vw, 40px);
      background: var(--white);
      border: 1px solid var(--line);
      border-radius: var(--radius-l);
      box-shadow: 0 24px 48px rgb(11 24 56 / 0.08);
    }
    .form-card h3 { font-size: 28px; }
    .form-card > p { margin: 8px 0 var(--space-3); color: var(--ink-soft); }
    @media (max-width: 960px) { .grid { grid-template-columns: 1fr; } .form-card { position: static; } }
  `,
})
export class AdmissionsSection {
  readonly stages = input.required<StageOption[]>();
  protected readonly steps = STEPS;
}
