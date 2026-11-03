import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';

const OLD_SITE = 'https://bkgglobalschool.com';

/* Events listed on the school's Happenings pages; posts from the school blog with their published dates. */
const RECENT = ['Krishna Janmashtami', 'Varamahalakshmi', 'Kargil Diwas', 'Nagara Panchami'];
const ANNUAL = ['Founder’s Day', 'Sports Day', 'Graduation Day'];
const POSTS = [
  { title: 'Board exam preparation checklist for students and parents', date: '29 June 2026' },
  { title: 'How CBSE education supports competitive exam preparation', date: '23 June 2026' },
  { title: 'Top 10 practical life skills every student should learn early', date: '22 May 2026' },
];

@Component({
  selector: 'app-happenings-section',
  imports: [RevealDirective],
  template: `
    <section class="happenings" id="happenings" aria-labelledby="happenings-title">
      <div class="wrap">
        <div class="head">
          <h2 class="section-title" id="happenings-title">Happenings at BKG</h2>
          <a class="btn btn-outline" [href]="site + '/bkg_happenings/'">View all happenings</a>
        </div>

        <div class="grid">
          <article class="panel gold-cap" appReveal>
            <h3>Celebrated this term</h3>
            <ul class="events">
              @for (e of recent; track e) { <li>{{ e }}</li> }
            </ul>
          </article>
          <article class="panel gold-cap" appReveal="100">
            <h3>Annual milestones</h3>
            <ul class="events">
              @for (e of annual; track e) { <li>{{ e }}</li> }
            </ul>
          </article>
          <article class="panel blog gold-cap" appReveal="200">
            <h3>From the BKG blog</h3>
            <ul class="posts">
              @for (p of posts; track p.title) {
                <li><a [href]="site + '/blog/'"><time>{{ p.date }}</time>{{ p.title }}</a></li>
              }
            </ul>
            <a class="more" [href]="site + '/blog/'">Read the blog</a>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .happenings { padding: var(--space-6) var(--gutter); background: var(--paper); }
    .head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: end; gap: var(--space-3); }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1.3fr;
      gap: 24px;
      margin-top: var(--space-5);
    }
    .panel {
      padding: clamp(24px, 2.6vw, 36px);
      background: var(--white);
      border: 1px solid var(--line);
      border-radius: var(--radius-l);
    }
    .panel h3 { font-size: 24px; }
    .events { margin: var(--space-3) 0 0; padding: 0; list-style: none; }
    .events li {
      padding: 14px 0;
      border-bottom: 1px solid var(--line);
      font-family: var(--font-serif);
      font-size: 19px;
      color: var(--navy-deep);
    }
    .events li:last-child { border-bottom: 0; }
    .blog { background: var(--navy); border-color: var(--navy); }
    .blog h3 { color: var(--white); }
    .posts { margin: var(--space-2) 0 0; padding: 0; list-style: none; }
    .posts li { border-bottom: 1px solid rgb(255 255 255 / 0.15); }
    .posts a { display: block; padding: 14px 0; color: var(--white); font-weight: 600; text-decoration: none; }
    .posts a:hover { color: var(--gold); }
    .posts time { display: block; font-size: 13px; font-weight: 500; color: var(--on-navy-soft); }
    .more { display: inline-block; margin-top: var(--space-3); font-weight: 700; color: var(--gold); }
    @media (max-width: 960px) { .grid { grid-template-columns: 1fr 1fr; } .blog { grid-column: 1 / -1; } }
    @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  `,
})
export class HappeningsSection {
  protected readonly site = OLD_SITE;
  protected readonly recent = RECENT;
  protected readonly annual = ANNUAL;
  protected readonly posts = POSTS;
}
