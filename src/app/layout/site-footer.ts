import { Component } from '@angular/core';
import { Particles } from '../shared/particles';
import { RevealDirective } from '../shared/reveal.directive';

const OLD_SITE = 'https://bkgglobalschool.com';

const QUICK_LINKS = [
  { label: 'Chairman’s message', href: `${OLD_SITE}/chairmans-message/` },
  { label: 'Leadership', href: `${OLD_SITE}/leadership/` },
  { label: 'Mission & vision', href: `${OLD_SITE}/our-mission-vision/` },
  { label: 'Curriculum', href: `${OLD_SITE}/curriculum/` },
  { label: 'Life at BKG', href: `${OLD_SITE}/life-bkg/` },
  { label: 'BKG Happenings', href: `${OLD_SITE}/bkg_happenings/` },
];

const ADMISSION_LINKS = [
  { label: 'Admission procedure', href: `${OLD_SITE}/admissions/` },
  { label: 'Fee structure', href: `${OLD_SITE}/fees-structure/` },
  { label: 'Front office', href: `${OLD_SITE}/front-office/` },
  { label: 'Mandatory public disclosure', href: `${OLD_SITE}/mandatory-public-disclosure/` },
  { label: 'Blog', href: `${OLD_SITE}/blog/` },
];

@Component({
  selector: 'app-site-footer',
  imports: [Particles, RevealDirective],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly quickLinks = QUICK_LINKS;
  protected readonly admissionLinks = ADMISSION_LINKS;
  protected readonly year = new Date().getFullYear();
}
