import { Component } from '@angular/core';
import { Particles } from '../../../shared/particles';
import { RevealDirective } from '../../../shared/reveal.directive';

@Component({
  selector: 'app-campus-section',
  imports: [RevealDirective, Particles],
  template: `
    <section class="campus" id="campus" aria-labelledby="campus-title">
      <img class="bg" src="images/bkg/sandur.jpg" width="1024" height="682" loading="lazy"
        alt="Green hills and red rock rising above a lake near Sandur" />
      <div class="shade" aria-hidden="true"></div>
      <app-particles [density]="1.1" [opacity]="0.65" />
      <div class="wrap inner" appReveal revealFrom="left">
        <blockquote class="gandhi">
          <p>“See Sandur in September.”</p>
          <cite>Mahatma Gandhi</cite>
        </blockquote>
        <h2 id="campus-title">A 17-acre campus in the Ooty of Karnataka</h2>
        <p class="lede">Sandur sits among green hills, valleys and gorges, close to Hampi, a World Heritage Site. Its cool,
          pleasant climate makes it a calm place to learn.</p>
        <dl class="distances">
          <div><dt>Jindal Airport</dt><dd>17 km</dd></div>
          <div><dt>Toranagallu station</dt><dd>23 km</dd></div>
          <div><dt>Hosapete station</dt><dd>28 km</dd></div>
          <div><dt>Hampi</dt><dd>Nearby</dd></div>
        </dl>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .campus {
      position: relative;
      overflow: hidden;
      padding: clamp(72px, 9vw, 128px) var(--gutter);
      background: var(--navy-deep);
      color: var(--white);
    }
    .bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .shade {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgb(11 24 56 / 0.88) 0%, rgb(11 24 56 / 0.6) 50%, rgb(11 24 56 / 0.15) 100%);
    }
    .inner { position: relative; }
    .gandhi p {
      font-family: var(--font-serif);
      font-size: clamp(20px, 2vw, 26px);
      font-style: italic;
      color: var(--gold);
    }
    .gandhi cite {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      font-style: normal;
      color: var(--on-navy-soft);
    }
    h2 {
      margin-top: var(--space-3);
      max-width: 16ch;
      font-size: clamp(36px, 4.4vw, 60px);
      color: var(--white);
    }
    .lede {
      margin-top: var(--space-3);
      max-width: 52ch;
      font-size: 18px;
      color: var(--on-navy-soft);
    }
    .distances {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3) var(--space-5);
      margin: var(--space-5) 0 0;
    }
    .distances div { border-left: 2px solid var(--gold); padding-left: 14px; }
    .distances dt { font-size: 13px; letter-spacing: 0.04em; color: var(--on-navy-soft); }
    .distances dd { margin: 2px 0 0; font-family: var(--font-serif); font-size: 26px; font-weight: 600; color: var(--white); }
  `,
})
export class CampusSection {}
