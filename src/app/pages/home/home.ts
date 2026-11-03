import { Component } from '@angular/core';
import { SiteFooter } from '../../layout/site-footer';
import { SiteHeader } from '../../layout/site-header';
import { CountUpDirective } from '../../shared/count-up.directive';
import { RevealDirective } from '../../shared/reveal.directive';
import { AdmissionsSection } from './sections/admissions-section';
import { CampusSection } from './sections/campus-section';
import { HappeningsSection } from './sections/happenings-section';
import { LifeSection } from './sections/life-section';
import { ParentsSection } from './sections/parents-section';
import { StageOption, VisitForm } from './visit-form';

interface Stage extends StageOption {
  numeral: string;
  summary: string;
}

/* Stages and descriptions from bkgglobalschool.com (Foundation, Key Stage 1, Key Stage 2 pages). */
export const STAGES: Stage[] = [
  { id: 'pre-primary', numeral: 'I', name: 'Pre-Primary', classes: 'Pre-KG, LKG, UKG',
    summary: 'Hands-on discovery in a Montessori lab, story junction, science hub, sandpit and toys museum.' },
  { id: 'primary', numeral: 'II', name: 'Primary', classes: 'Class 1 to 5',
    summary: 'Scientific temper through observation and experiment, and a love of reading that lasts a lifetime.' },
  { id: 'middle', numeral: 'III', name: 'Middle School', classes: 'Class 6 to 8',
    summary: 'Collaborative learning, projects, debates and experiments that build curiosity and confidence.' },
  { id: 'high', numeral: 'IV', name: 'High School', classes: 'Class 9 and 10',
    summary: 'CBSE board years, with the board syllabus taught alongside a competitive-exam approach.' },
];

/* Campus figures published on the school's home page and Life @ BKG page. */
const FIGURES = [
  { value: 17, suffix: '', unit: 'acres', label: 'Campus in the hills of Sandur' },
  { value: 3, suffix: ' lakh', unit: 'sq ft', label: 'Of learning and residential space' },
  { value: 4.5, suffix: '', unit: 'acres', label: 'Playing area with pool and courts' },
  { value: 24, suffix: '/7', unit: '', label: 'CCTV, RFID tracking and ambulance' },
];

/* BKG-SMILE: the five fundamental principles of the school's curriculum. */
const SMILE = [
  { letter: 'S', title: 'Spiritual resilience', text: 'Yoga, meditation, Saraswati Vandana and the chanting of slokas bring calm and focus to the day.' },
  { letter: 'M', title: 'Mental intelligence', text: 'Questioning, enquiry and independent thinking, with a scientific, solution-oriented outlook.' },
  { letter: 'I', title: 'Infrastructure & facilities', text: 'Smart classrooms, science and English language labs, and a 4.5-acre playing area.' },
  { letter: 'L', title: 'Laboratory-based teaching', text: 'Experiments, models, research and exploration: children learn by doing.' },
  { letter: 'E', title: 'Emotional intelligence', text: 'Visual and performing arts, life skills and pastoral care for confident, happy children.' },
];

@Component({
  selector: 'app-home',
  imports: [
    SiteHeader, SiteFooter, VisitForm, RevealDirective, CountUpDirective,
    LifeSection, CampusSection, HappeningsSection, AdmissionsSection, ParentsSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  protected readonly stages = STAGES;
  protected readonly figures = FIGURES;
  protected readonly smile = SMILE;
}
