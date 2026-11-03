import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';

const OLD_SITE = 'https://bkgglobalschool.com';

/* School timings from the Contact page; accounts office hours from the Fees page. */
const TIMINGS = [
  { who: 'Pre-primary (Pre-KG, LKG, UKG)', when: 'Monday to Friday, 8:30 am – 12:30 pm', note: 'All Saturdays off' },
  { who: 'Class 1 onwards', when: 'Monday to Friday, 8:30 am – 3:30 pm · Saturday, 8:30 am – 12:30 pm', note: 'Second Saturdays off' },
  { who: 'Accounts office (fee payment)', when: 'Every working day, 9:00 am – 4:00 pm', note: '' },
];

const LINKS = [
  { label: 'Fee structure', href: `${OLD_SITE}/fees-structure/` },
  { label: 'Front office', href: `${OLD_SITE}/front-office/` },
  { label: 'BKG Happenings', href: `${OLD_SITE}/bkg_happenings/` },
  { label: 'Mandatory public disclosure', href: `${OLD_SITE}/mandatory-public-disclosure/` },
];

@Component({
  selector: 'app-parents-section',
  imports: [RevealDirective],
  template: `
    <section class="parents" id="parents" aria-labelledby="parents-title">
      <div class="wrap grid">
        <div appReveal revealFrom="left">
          <h2 class="section-title" id="parents-title">For BKG parents</h2>
          <dl class="timings">
            @for (t of timings; track t.who) {
              <div>
                <dt>{{ t.who }}</dt>
                <dd>{{ t.when }}@if (t.note) { <span>{{ t.note }}</span> }</dd>
              </div>
            }
          </dl>
        </div>
        <nav class="links" aria-label="Parent resources">
          @for (l of links; track l.href; let i = $index) {
            <a [href]="l.href" appReveal="{{ i * 110 }}" revealFrom="right">
              {{ l.label }}
              <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          }
        </nav>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .parents { padding: var(--space-6) var(--gutter); background: var(--navy-soft); }
    .grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: clamp(40px, 6vw, 96px); align-items: end; }
    .timings { display: grid; gap: 0; margin: var(--space-4) 0 0; }
    .timings div { padding: 18px 0; border-top: 1px solid #c6cee2; }
    .timings dt { font-family: var(--font-serif); font-size: 20px; font-weight: 600; color: var(--navy-deep); }
    .timings dd { margin: 4px 0 0; color: var(--ink-soft); }
    .timings dd span { display: block; font-size: 14px; color: var(--gold-text); font-weight: 600; }
    .links { display: grid; gap: 10px; }
    .links a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 58px;
      padding: 0 22px;
      background: var(--white);
      border-radius: var(--radius);
      font-weight: 700;
      color: var(--navy-deep);
      text-decoration: none;
      transition: background 180ms var(--ease-out), color 180ms var(--ease-out);
    }
    .links a svg { color: var(--gold-deep); transition: transform 240ms var(--ease-out); }
    .links a:hover { background: var(--navy); color: var(--white); }
    .links a:hover svg { color: var(--gold); transform: translateX(3px); }
    @media (max-width: 860px) { .grid { grid-template-columns: 1fr; } }
  `,
})
export class ParentsSection {
  protected readonly timings = TIMINGS;
  protected readonly links = LINKS;
}
