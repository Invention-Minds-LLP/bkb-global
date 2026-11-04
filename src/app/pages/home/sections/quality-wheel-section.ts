import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';

interface Corner {
  title: string;
  lead: string;
  points: string[];
  icon: string;
}

/*
 * Eight corners of quality, each drawn from the school's own pages
 * (Curriculum, KKare, Key Stages, Life @ BKG, Chairman's message, Mission).
 */
const CORNERS: Corner[] = [
  { title: 'Academic excellence', lead: 'A creative, insightful CBSE curriculum, with the board syllabus integrated with a competitive approach.',
    points: ['CBSE curriculum framework for the 21st century', 'Board syllabus taught with a competitive-exam approach (KKare)', 'Extended study hours supervised by senior faculty'],
    icon: 'M2 9.5l10-5 10 5-10 5zM6 11.5v4.5c3.5 2.6 8.5 2.6 12 0v-4.5M22 9.5v5.5' },
  { title: 'Thinking & reasoning', lead: 'Mental intelligence at the centre: questioning, enquiry, independent thinking and a scientific temper.',
    points: ['Seminars, debates, quizzes and group discussion', 'Research, experiments and model making', 'Self and peer assessment'],
    icon: 'M9.5 17.5h5M10.5 20.5h3M12 3a6 6 0 0 0-3.9 10.6c.8.7 1.3 1.6 1.4 2.9h5c.1-1.3.6-2.2 1.4-2.9A6 6 0 0 0 12 3z' },
  { title: 'Leadership & life skills', lead: 'Children learn to decide, organise and lead, with a comprehensive life skills programme.',
    points: ['Decision-making, team-building and communication', 'Life-skill studio: organisation, independence, etiquette', 'Accountability towards society'],
    icon: 'M12 3l2.6 5.4 5.9.9-4.3 4.1 1 5.9L12 16.5 6.8 19.3l1-5.9-4.3-4.1 5.9-.9z' },
  { title: 'Technology', lead: 'Pioneers of digital learning in rural areas, upgrading technology to keep pace with the times.',
    points: ['Smart classrooms with tablets and systems', 'Online tests and video lectures', 'Computer lab and ICT corner'],
    icon: 'M3 5h18v11H3zM8 20h8M12 16v4' },
  { title: 'Values & character', lead: 'Intelligence with character and action: the goal of true education.',
    points: ['Life sketches of towering Indian and global personalities', 'Compassion, respect and patriotism', 'Festivals of national and cultural importance'],
    icon: 'M12 21s-7-4.4-9.3-9C1.4 9.2 3 5.5 6.5 5.5c2.1 0 3.6 1.2 5.5 3 1.9-1.8 3.4-3 5.5-3 3.5 0 5.1 3.7 3.8 6.5C19 16.6 12 21 12 21z' },
  { title: 'Wellbeing & mentoring', lead: 'The Grand Parenting Programme pairs care for the mind with guidance for the future.',
    points: ['Grand Mother Parenting: mental health, moral and ethical values', 'Grand Father Parenting: academics, career guidance, skills', 'School counsellors for individual guidance'],
    icon: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M12 20c0-3.3 1.8-5.5 4-5.5 3.3 0 6 2.2 6 5.5' },
  { title: 'Spiritual roots', lead: 'Calm, focus and resilience from India’s own traditions of learning.',
    points: ['Aksharabhyasa, Vidyarambham and Agnihotram', 'Yoga, pranayama and meditation', 'Saraswati Vandana, slokas and Bhagavad Gita'],
    icon: 'M12 3c2.6 3 3.2 5.6 1.6 7.7-.9 1.1-1.6 1.3-1.6 1.3s-.7-.2-1.6-1.3C8.8 8.6 9.4 6 12 3zM4 14c4 6 12 6 16 0zM3 14h18' },
  { title: 'Safety & residential care', lead: 'A home away from home, on a highly secured campus.',
    points: ['24/7 CCTV, RFID tracking and school ambulance', 'GPS-fitted buses with female chaperones', 'Dorm parents, wardens and dietician-planned meals'],
    icon: 'M12 2.5l8 3v6c0 5-3.5 8.6-8 10-4.5-1.4-8-5-8-10v-6zM8.5 12l2.5 2.5 4.5-5' },
];

@Component({
  selector: 'app-quality-wheel-section',
  imports: [RevealDirective],
  templateUrl: './quality-wheel-section.html',
  styleUrl: './quality-wheel-section.css',
})
export class QualityWheelSection {
  protected readonly corners = CORNERS;
  protected readonly active = signal(0);
  protected readonly step = 360 / CORNERS.length;

  private userPicked = false;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let visible = false;
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.35 });
      io.observe(this.host);
      // Tour the eight corners until the visitor picks one themselves.
      const timer = setInterval(() => {
        if (visible && !this.userPicked) this.active.update((i) => (i + 1) % CORNERS.length);
      }, 4200);
      destroyRef.onDestroy(() => {
        io.disconnect();
        clearInterval(timer);
      });
    });
  }

  protected pick(i: number): void {
    this.userPicked = true;
    this.active.set(i);
  }
}
