import { Component } from '@angular/core';

/* Words and people from bkgglobalschool.com (home page and "From the Chairman's Desk"). */
@Component({
  selector: 'app-principal-message',
  template: `
    <section class="message" aria-labelledby="chairman-title">
      <figure class="portrait">
        <div class="frame">
          <img src="images/bkg/chairman.jpg" width="540" height="720" loading="lazy"
            alt="Sri B. Rudra Gouda, Chairman and Managing Trustee of BKG Global School" />
        </div>
        <figcaption>
          <span class="name">Sri B. Rudra Gouda</span>
          <span class="role">Chairman &amp; Managing Trustee</span>
        </figcaption>
      </figure>

      <div class="words">
        <h2 id="chairman-title">From the Chairman’s desk</h2>
        <blockquote>
          <svg class="quote-mark" aria-hidden="true" viewBox="0 0 48 40" width="48" height="40">
            <path d="M4 36V22C4 10 10 4 20 2l2 6c-6 2-9 6-9 12h9v16zM26 36V22c0-12 6-18 16-20l2 6c-6 2-9 6-9 12h9v16z" fill="#e5a823" stroke="#0f1b44" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          <p>Intelligence is not enough. Intelligence with character and action is the goal of true education.</p>
          <p class="more">Our institution aims at grooming each child academically, socially and spiritually, so that they
            become confident and well-balanced citizens of the world.</p>
        </blockquote>
        <a class="read" href="https://bkgglobalschool.com/chairmans-message/">
          Read the full message
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>

        <aside class="founder" aria-label="Our founder">
          <img src="images/bkg/founder.jpg" width="350" height="450" loading="lazy"
            alt="Sri B. Kumara Gouda, founder of the BKG Group" />
          <div>
            <p class="founder-name">Sri B. Kumara Gouda <span>(1924–2009)</span></p>
            <p class="founder-role">Founder, BKG Group</p>
            <p class="founder-quote">“The best teachers of humanity are the lives of great men.” Walking in your footsteps.</p>
          </div>
        </aside>
      </div>
    </section>
  `,
  styleUrl: './principal-message.css',
})
export class PrincipalMessage {}
