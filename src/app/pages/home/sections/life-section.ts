import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';

/* Residential and safety facts from the school's Life @ BKG page. */
const CARE = [
  'Separate residential campus for boys and girls, Class V to X',
  'Dorm parents, house masters, tutors and wardens',
  'Vegetarian meals planned by dieticians, produce from our own farms',
  'Extended study hours supervised by senior faculty',
  '24/7 CCTV, RFID tracking and a school ambulance',
  'GPS-fitted buses with female chaperones',
];

@Component({
  selector: 'app-life-section',
  imports: [RevealDirective],
  template: `
    <section class="life" id="life" aria-labelledby="life-title">
      <div class="wrap">
        <h2 class="section-title" id="life-title" appReveal revealFrom="left">Life at BKG</h2>
        <p class="section-lede" appReveal="120" revealFrom="left">Good pastoral care is central to every child’s intellectual, spiritual and emotional
          development. Days are full: lessons, labs, arts, sport and tradition.</p>

        <div class="mosaic">
          <figure class="tile big" appReveal revealFrom="left">
            <img src="images/bkg/agnihotram.jpg" width="1024" height="684" loading="lazy"
              alt="BKG students seated around a copper vessel during the Agnihotram ceremony" />
            <figcaption><strong>Spiritual roots</strong> Agnihotram, Saraswati Vandana, yoga and meditation</figcaption>
          </figure>
          <figure class="tile" appReveal="100" revealFrom="down">
            <img src="images/bkg/football.jpg" width="1024" height="684" loading="lazy"
              alt="Students playing football on the ground in front of the school building" />
            <figcaption><strong>Sport</strong> Basketball, tennis, swimming and athletics</figcaption>
          </figure>
          <figure class="tile" appReveal="200" revealFrom="right">
            <img src="images/bkg/art-painting.jpg" width="1024" height="684" loading="lazy"
              alt="A young BKG student painting a large multicoloured umbrella" />
            <figcaption><strong>Arts</strong> Art, craft, music and drama</figcaption>
          </figure>

          <div class="care gold-cap" appReveal="150" revealFrom="zoom">
            <h3>A home away from home</h3>
            <ul>
              @for (item of care; track item) {
                <li>
                  <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18"><path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  {{ item }}
                </li>
              }
            </ul>
            <a class="more" href="https://bkgglobalschool.com/life-bkg/">More about residential life</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .life { padding: var(--space-6) var(--gutter); }
    .mosaic {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: auto auto;
      gap: 20px;
      margin-top: var(--space-5);
    }
    .tile {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-l);
      min-height: 260px;
      background: var(--navy-deep);
    }
    .tile.big { grid-row: span 2; }
    .tile img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1200ms var(--ease-out);
    }
    .tile:hover img { transform: scale(1.04); }
    .tile figcaption {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 48px 22px 20px;
      background: linear-gradient(to top, rgb(11 24 56 / 0.9), rgb(11 24 56 / 0));
      color: var(--on-navy-soft);
      font-size: 14px;
    }
    .tile figcaption strong {
      display: block;
      font-family: var(--font-serif);
      font-size: 22px;
      font-weight: 600;
      color: var(--white);
    }
    .care {
      grid-column: 2 / span 2;
      padding: clamp(24px, 3vw, 40px);
      border-radius: var(--radius-l);
      background: var(--paper);
    }
    .care h3 { font-size: 26px; }
    .care ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px 28px;
      margin: var(--space-3) 0 0;
      padding: 0;
      list-style: none;
    }
    .care li {
      display: flex;
      gap: 10px;
      font-size: 15px;
      color: var(--ink);
    }
    .care li svg { flex: none; margin-top: 4px; color: var(--gold-deep); }
    .more {
      display: inline-block;
      margin-top: var(--space-3);
      font-weight: 700;
      color: var(--navy);
    }
    @media (max-width: 960px) {
      .mosaic { grid-template-columns: 1fr 1fr; }
      .tile.big { grid-column: 1 / -1; grid-row: auto; min-height: 340px; }
      .care { grid-column: 1 / -1; }
    }
    @media (max-width: 600px) {
      .mosaic { grid-template-columns: 1fr; }
      .care ul { grid-template-columns: 1fr; }
    }
  `,
})
export class LifeSection {
  protected readonly care = CARE;
}
