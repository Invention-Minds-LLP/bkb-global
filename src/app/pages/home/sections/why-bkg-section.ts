import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';

/*
 * The eight competencies come from the school's "Why BKG" page ("competent enough in learning,
 * organizing, deciding, questioning, reasoning, analyzing and team-building ... with effective
 * communicating skills"). Each "how" line is taken from the Curriculum, Key Stage and KKare pages.
 */
const COMPETENCIES = [
  { skill: 'Questioning', how: 'Classrooms built on enquiry: children are encouraged to ask why, and to find out.',
    icon: 'M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.6-3 4.5M12 18h.01M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z' },
  { skill: 'Reasoning', how: 'Experiments, research and exploration build a scientific temper.',
    icon: 'M9 3h6M10 3v6l-5 8.6A2.2 2.2 0 0 0 7 21h10a2.2 2.2 0 0 0 2-3.4L14 9V3M7.5 15h9' },
  { skill: 'Analysing', how: 'Project work, model making and observation from the early years.',
    icon: 'M3 20h18M6 16v-5M11 16V7M16 16v-8M21 16V4' },
  { skill: 'Deciding', how: 'A comprehensive life skills programme for confident, independent choices.',
    icon: 'M12 3v6M12 9l-6 6v6M12 9l6 6v6M4 21h4M16 21h4' },
  { skill: 'Organising', how: 'A life-skill studio that teaches organisation, independence and etiquette.',
    icon: 'M4 5h16M4 12h16M4 19h10M18 17l2 2 3-4' },
  { skill: 'Team-building', how: 'Collaborative learning, group discussion and team sport.',
    icon: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M12 20c0-3.3 1.8-5.5 4-5.5 3.3 0 6 2.2 6 5.5' },
  { skill: 'Communicating', how: 'Seminars, debates, elocution, declamation and role play.',
    icon: 'M4 5h16v11H9l-5 4zM8 9.5h8M8 12.5h5' },
  { skill: 'Self-reflection', how: 'Self and peer assessment: children learn by looking honestly at their own work.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9 10h.01M15 10h.01M8.5 14.5c1.9 2 5.1 2 7 0' },
];

@Component({
  selector: 'app-why-bkg-section',
  imports: [RevealDirective],
  template: `
    <section class="why" id="about" aria-labelledby="why-title">
      <div class="wrap intro">
        <div class="copy" appReveal revealFrom="left">
          <h2 class="section-title" id="why-title">Raising thinkers, decision-makers and leaders</h2>
          <p class="section-lede">At BKG, the uniqueness of every student is recognised, nurtured and showcased. We
            empower children to learn, organise, decide, question, reason, analyse and build teams, so they face global
            challenges with confidence and communicate effectively.</p>
          <p class="body">Our aim is young, confident citizens with a sense of accountability towards society: independent,
            self-motivated, respectful of every culture, and ready to lead.</p>
          <blockquote class="pull">“Education is not preparation for life; education is life itself.”</blockquote>
        </div>
        <div class="media" appReveal="150" revealFrom="right">
          <img class="m1" src="images/bkg/computer-lab.jpg" width="1024" height="683" loading="lazy"
            alt="BKG students with headsets working at computers in the computer lab" />
          <img class="m2" src="images/bkg/art-painting.jpg" width="1024" height="684" loading="lazy"
            alt="A young BKG student painting a large multicoloured umbrella in the art room" />
        </div>
      </div>

      <div class="wrap">
        <div class="mind" id="mental-intelligence">
          <div class="mind-copy" appReveal revealFrom="left">
            <span class="mind-letter" aria-hidden="true">M</span>
            <h3>Mental intelligence: how BKG teaches children to think</h3>
            <p>In a world that rewards judgement over memory, a child’s greatest asset is a mind that can question,
              reason and solve. That is why mental intelligence sits at the centre of the BKG-SMILE curriculum.</p>
            <p>Our classrooms are built on questioning, enquiry and independent thinking, with a scientific temper and a
              solution-oriented outlook. Collaborative learning is guided by constant mentoring and monitoring, and self
              and peer assessment teach children to reflect on their own work.</p>
            <a class="btn btn-gold" href="#quality">See quality in every corner</a>
          </div>
          <ul class="skills" aria-label="Competencies BKG builds">
            @for (c of competencies; track c.skill; let i = $index) {
              <li appReveal="{{ i * 80 }}" revealFrom="zoom">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="30" height="30"><path [attr.d]="c.icon" /></svg>
                <h4>{{ c.skill }}</h4>
                <p>{{ c.how }}</p>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrl: './why-bkg-section.css',
})
export class WhyBkgSection {
  protected readonly competencies = COMPETENCIES;
}
