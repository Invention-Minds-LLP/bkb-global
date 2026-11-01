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

type StageArt = 'blocks' | 'book' | 'flask' | 'compass' | 'cap';

interface Stage extends StageOption {
  ages: string;
  summary: string;
  art: StageArt;
}

/*
 * Stage names follow the common Indian school structure. The school must
 * confirm its own board, classes and wording; copy is placeholder.
 */
const STAGES: Stage[] = [
  { id: 'pre-primary', name: 'Pre-Primary', classes: 'Nursery to UKG', ages: 'Ages 3–6', art: 'blocks',
    summary: 'Letters, numbers and the habit of asking “why?”, learned through structured play.' },
  { id: 'primary', name: 'Primary', classes: 'Class 1 to 5', ages: 'Ages 6–11', art: 'book',
    summary: 'Strong reading, writing and mathematics, so every child builds on firm ground.' },
  { id: 'middle', name: 'Middle School', classes: 'Class 6 to 8', ages: 'Ages 11–14', art: 'flask',
    summary: 'Science in the lab, languages, social studies and the confidence to explain an answer.' },
  { id: 'secondary', name: 'Secondary', classes: 'Class 9 and 10', ages: 'Ages 14–16', art: 'compass',
    summary: 'Board examination years, taught for understanding, with regular practice and feedback.' },
  { id: 'senior', name: 'Senior Secondary', classes: 'Class 11 and 12', ages: 'Ages 16–18', art: 'cap',
    summary: 'Science, Commerce and Humanities streams, with guidance for college and careers.' },
];

const PRINCIPLES = [
  { title: 'Clear teaching', text: 'Every lesson starts with a clear explanation and a worked example before children try it themselves.' },
  { title: 'Practice that sticks', text: 'Short, regular practice and revision, so ideas are remembered at exam time and after.' },
  { title: 'Feedback every week', text: 'Teachers check work closely and parents hear how their child is doing, not just at report time.' },
];

const LIFE = ['Yoga & sport', 'Music & dance', 'Art', 'Debate', 'Science club', 'Assemblies'];

const VISIT_STEPS = [
  { title: 'Book', text: 'Tell us your child’s stage. It takes a minute.' },
  { title: 'Visit', text: 'Walk through the school on a normal working day.' },
  { title: 'Meet', text: 'Sit in a class and meet the teachers.' },
  { title: 'Apply', text: 'Take the admission form home and apply when ready.' },
];

const PARENT_LINKS = [
  { label: 'Calendar & holidays', href: '#' },
  { label: 'Circulars', href: '#' },
  { label: 'Parent portal', href: '#' },
  { label: 'Fees', href: '#' },
  { label: 'Transport', href: '#' },
  { label: 'Contact the office', href: '#contact' },
];

@Component({
  selector: 'app-home',
  imports: [DrawDirective, VisitForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  protected readonly stages = STAGES;
  protected readonly principles = PRINCIPLES;
  protected readonly life = LIFE;
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
