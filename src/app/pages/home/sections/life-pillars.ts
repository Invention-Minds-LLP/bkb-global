import { Component } from '@angular/core';

type PillarArt = 'residential' | 'spiritual';

interface Pillar {
  title: string;
  text: string;
  photo?: { src: string; alt: string; width: number; height: number };
  art?: PillarArt;
}

/* Five parts of life at BKG, described from the school's Life @ BKG, curriculum and home pages. */
const PILLARS: Pillar[] = [
  { title: 'Academics & technology', text: 'Smart classrooms, a computer lab, online tests and video lectures.',
    photo: { src: 'images/bkg/computer-lab.jpg', alt: 'BKG students with headsets working at computers in the computer lab', width: 1024, height: 683 } },
  { title: 'Arts & creativity', text: 'Art, craft, music and drama fill the day with colour and confidence.',
    photo: { src: 'images/bkg/art-painting.jpg', alt: 'A young BKG student painting a large multicoloured umbrella', width: 1024, height: 684 } },
  { title: 'Sports', text: 'A 4.5-acre playing area with basketball, tennis and a swimming pool.',
    photo: { src: 'images/bkg/football.jpg', alt: 'Students playing football on the ground in front of the school building', width: 1024, height: 684 } },
  { title: 'Residential life', text: 'A home away from home: dorm parents, wardens, nutritious vegetarian meals and study hours.',
    art: 'residential' },
  { title: 'Spiritual roots', text: 'Aksharabhyasa, Agnihotram, Saraswati Vandana, yoga and meditation.',
    art: 'spiritual' },
];

@Component({
  selector: 'app-life-pillars',
  template: `
    <section class="life" aria-labelledby="life-title">
      <div class="head">
        <h2 id="life-title">Life at BKG</h2>
        <p>Good pastoral care is central to every child’s intellectual, spiritual and emotional development.</p>
      </div>
      <ul class="pillars">
        @for (p of pillars; track p.title; let i = $index) {
          <li class="pillar" [class.tilt-left]="i % 2 === 0">
            <div class="media">
              @if (p.photo) {
                <img [src]="p.photo.src" [alt]="p.photo.alt" [width]="p.photo.width" [height]="p.photo.height" loading="lazy" />
              } @else if (p.art === 'residential') {
                <svg class="pillar-art" aria-hidden="true" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="74" fill="#0f1b44" stroke="#0f1b44" stroke-width="2.5"/>
                  <path class="moon" d="M112 34a18 18 0 1 0 14 26 14 14 0 1 1-14-26z" fill="#e5a823"/>
                  <circle class="star s1" cx="46" cy="40" r="2.5" fill="#fff"/>
                  <circle class="star s2" cx="66" cy="28" r="2" fill="#fff"/>
                  <circle class="star s3" cx="34" cy="62" r="2" fill="#fff"/>
                  <path d="M36 128V84l44-28 44 28v44z" fill="#eef2fb" stroke="#0f1b44" stroke-width="2.5" stroke-linejoin="round"/>
                  <path d="M28 88l52-34 52 34" fill="none" stroke="#1e3a8a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect class="window w1" x="50" y="94" width="16" height="16" rx="2" fill="#e5a823" stroke="#0f1b44" stroke-width="2"/>
                  <rect class="window w2" x="94" y="94" width="16" height="16" rx="2" fill="#e5a823" stroke="#0f1b44" stroke-width="2"/>
                  <path d="M72 128v-20h16v20" fill="#1e3a8a" stroke="#0f1b44" stroke-width="2"/>
                </svg>
              } @else {
                <svg class="pillar-art" aria-hidden="true" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="74" fill="#fff" stroke="#0f1b44" stroke-width="2.5"/>
                  <g class="flame">
                    <path d="M80 44c10 12 12 22 6 30-4 5-8 6-6 6-8 0-14-6-12-16 2-8 8-12 12-20z" fill="#e5a823" stroke="#0f1b44" stroke-width="2.5" stroke-linejoin="round"/>
                    <path d="M80 60c4 6 4 12 0 16-4-4-4-10 0-16z" fill="#c8252c"/>
                  </g>
                  <path d="M40 92c10 22 70 22 80 0z" fill="#1e3a8a" stroke="#0f1b44" stroke-width="2.5" stroke-linejoin="round"/>
                  <path d="M58 112c4 6 40 6 44 0" fill="none" stroke="#0f1b44" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M36 92h88" stroke="#0f1b44" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M48 126c10-6 18-6 32 0 14-6 22-6 32 0" fill="none" stroke="#c9d6f2" stroke-width="4" stroke-linecap="round"/>
                </svg>
              }
            </div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </li>
        }
      </ul>
    </section>
  `,
  styleUrl: './life-pillars.css',
})
export class LifePillars {
  protected readonly pillars = PILLARS;
}
