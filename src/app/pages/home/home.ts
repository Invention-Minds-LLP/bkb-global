import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DrawDirective } from '../../shared/draw.directive';
import { StageOption, VisitForm } from './visit-form';
import { AnnouncementBar } from './sections/announcement-bar';
import { LifePillars } from './sections/life-pillars';
import { NewsEvents } from './sections/news-events';
import { PrincipalMessage } from './sections/principal-message';
import { WhyChoose } from './sections/why-choose';

type StageArt = 'blocks' | 'book' | 'flask' | 'compass' | 'cap';

interface Stage extends StageOption {
  summary: string;
  art: StageArt;
}

/* Stages and descriptions come from bkgglobalschool.com (Foundation, Key Stage 1, Key Stage 2 pages). */
const STAGES: Stage[] = [
  { id: 'pre-primary', name: 'Pre-Primary', classes: 'Pre-KG, LKG and UKG', art: 'blocks',
    summary: 'Hands-on discovery in a Montessori lab, story junction, sandpit, science hub and toys museum.' },
  { id: 'primary', name: 'Primary', classes: 'Class 1 to 5', art: 'book',
    summary: 'Scientific temper through observation and experiment, and a love of books that lasts a lifetime.' },
  { id: 'middle', name: 'Middle School', classes: 'Class 6 to 8', art: 'flask',
    summary: 'Collaborative learning, projects, debates and experiments that build curiosity and confidence.' },
  { id: 'high', name: 'High School', classes: 'Class 9 and 10', art: 'compass',
    summary: 'CBSE board years, with the board syllabus taught alongside a competitive-exam approach.' },
];

/* BKG-SMILE: the five fundamental principles of the school's curriculum. */
const PRINCIPLES = [
  { letter: 'S', title: 'Spiritual resilience', text: 'Yoga, meditation, Saraswati Vandana and chanting of slokas bring calm and focus to every day.' },
  { letter: 'M', title: 'Mental intelligence', text: 'Questioning, enquiry and independent thinking, with a scientific and solution-oriented outlook.' },
  { letter: 'I', title: 'Infrastructure & facilities', text: 'Smart classrooms, science and English language labs, and a 4.5-acre playing area.' },
  { letter: 'L', title: 'Laboratory-based teaching', text: 'Experiments, models, research and exploration: children learn by doing.' },
  { letter: 'E', title: 'Emotional intelligence', text: 'Visual and performing arts, life skills and pastoral care for confident, happy children.' },
];

/* The school's published admission procedure. */
const VISIT_STEPS = [
  { title: 'Apply', text: 'Download the application form, fill it in, and pay the application fee online.' },
  { title: 'Entrance test', text: 'English, Mathematics, Language and Intelligence, for Classes I to IX.' },
  { title: 'Interview', text: 'The child and parents meet the school, followed by a medical examination.' },
  { title: 'Admission', text: 'Pay the school fee and collect your child’s kit from the front office.' },
];

const OLD_SITE = 'https://bkgglobalschool.com';
const PARENT_LINKS = [
  { label: 'Fee structure', href: `${OLD_SITE}/fees-structure/` },
  { label: 'Admission procedure', href: `${OLD_SITE}/admissions/` },
  { label: 'Front office', href: `${OLD_SITE}/front-office/` },
  { label: 'BKG Happenings', href: `${OLD_SITE}/bkg_happenings/` },
  { label: 'Blog', href: `${OLD_SITE}/blog/` },
  { label: 'Mandatory disclosure', href: `${OLD_SITE}/mandatory-public-disclosure/` },
];

@Component({
  selector: 'app-home',
  imports: [DrawDirective, VisitForm, AnnouncementBar, WhyChoose, PrincipalMessage, LifePillars, NewsEvents],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  protected readonly stages = STAGES;
  protected readonly principles = PRINCIPLES;
  protected readonly visitSteps = VISIT_STEPS;
  protected readonly parentLinks = PARENT_LINKS;
  protected readonly year = new Date().getFullYear();

  protected readonly menuOpen = signal(false);
  /** The journey route is laid out in real pixels so its drawn length stays exact at every width. */
  protected readonly routeBox = signal('0 0 100 1000');
  protected readonly routePath = signal(HomePage.routeFor(100, 1000));
  /** Stages the journey path has reached; each one wakes its illustration. */
  protected readonly reached = signal(-1);

  private readonly journey = viewChild<ElementRef<HTMLElement>>('journey');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const section = this.journey()?.nativeElement;
      if (!section) return;
      const routeSvg = section.querySelector<SVGSVGElement>('.route-line');
      const layoutRoute = () => {
        if (!routeSvg) return;
        const w = routeSvg.clientWidth || 100;
        const h = routeSvg.clientHeight || 1000;
        this.routeBox.set(`0 0 ${w} ${h}`);
        this.routePath.set(HomePage.routeFor(w, h));
      };
      layoutRoute();
      const resizeObserver = new ResizeObserver(layoutRoute);
      if (routeSvg) resizeObserver.observe(routeSvg);
      destroyRef.onDestroy(() => resizeObserver.disconnect());

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        section.style.setProperty('--progress', '1');
        this.reached.set(this.stages.length - 1);
        return;
      }

      const items = Array.from(section.querySelectorAll<HTMLElement>('[data-stage]'));
      let frame = 0;
      const update = () => {
        frame = 0;
        const rect = section.getBoundingClientRect();
        const pivot = window.innerHeight * 0.6;
        const progress = Math.min(1, Math.max(0, (pivot - rect.top) / rect.height));
        section.style.setProperty('--progress', progress.toFixed(4));
        let last = -1;
        items.forEach((el, i) => {
          if (el.getBoundingClientRect().top + el.offsetHeight * 0.3 < pivot) last = i;
        });
        if (last !== this.reached()) this.reached.set(last);
      };
      const onScroll = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      update();
      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        cancelAnimationFrame(frame);
      });
    });
  }

  /** A gentle S-curve down the full height, scaled to the SVG's pixel box. */
  private static routeFor(w: number, h: number): string {
    const x = (v: number) => ((v / 100) * w).toFixed(1);
    const y = (v: number) => ((v / 1000) * h).toFixed(1);
    return `M${x(50)} ${y(0)} C ${x(90)} ${y(100)}, ${x(10)} ${y(200)}, ${x(50)} ${y(300)} ` +
      `S ${x(90)} ${y(500)}, ${x(50)} ${y(600)} S ${x(10)} ${y(800)}, ${x(50)} ${y(1000)}`;
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
