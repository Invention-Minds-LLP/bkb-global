import { Component } from '@angular/core';

/** Notices taken from the school's current website; the office updates these. */
const ANNOUNCEMENTS = [
  'Admissions open for academic year 2026–27',
  'CBSE Affiliation No. 830975',
  'Day and residential school for boys and girls',
  'Separate residential campus for boys and girls, Class V to X',
];

const UTILITY_LINKS = [
  { label: '08395-260477', href: 'tel:+918395260477' },
  { label: 'info@bkgglobalschool.com', href: 'mailto:info@bkgglobalschool.com' },
];

@Component({
  selector: 'app-announcement-bar',
  template: `
    <div class="bar">
      <section class="news" aria-label="Announcements">
        <span class="badge">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
            <path d="M4 10v4h3l6 4V6L7 10z" fill="currentColor"/>
            <path d="M16 9c1.2 1.6 1.2 4.4 0 6M18.5 7c2.2 2.8 2.2 7.2 0 10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          Announcements
        </span>
        <div class="track" tabindex="0" aria-label="Scrolling announcements; hover or focus to pause">
          <ul class="ticker">
            @for (item of announcements; track item) { <li>{{ item }}</li> }
          </ul>
          <ul class="ticker" aria-hidden="true">
            @for (item of announcements; track item) { <li>{{ item }}</li> }
          </ul>
        </div>
      </section>
      <nav class="utility" aria-label="Contact the school">
        @for (link of links; track link.label) { <a [href]="link.href">{{ link.label }}</a> }
      </nav>
    </div>
  `,
  styleUrl: './announcement-bar.css',
})
export class AnnouncementBar {
  protected readonly announcements = ANNOUNCEMENTS;
  protected readonly links = UTILITY_LINKS;
}
