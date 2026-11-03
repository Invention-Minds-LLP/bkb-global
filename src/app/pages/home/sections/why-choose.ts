import { Component } from '@angular/core';
import { DrawDirective } from '../../../shared/draw.directive';

type ProofIcon = 'building' | 'field' | 'home' | 'shield';

/* Proof points published on bkgglobalschool.com (home, Life @ BKG). Add results only once verified. */
const PROOF: { icon: ProofIcon; value: string; label: string }[] = [
  { icon: 'building', value: '17 acres', label: 'Campus, with 3 lakh sq ft built' },
  { icon: 'field', value: '4.5 acres', label: 'Playing area: basketball, tennis, swimming pool' },
  { icon: 'home', value: 'Day & residential', label: 'Separate hostels for boys and girls' },
  { icon: 'shield', value: '24 / 7', label: 'CCTV, RFID tracking and ambulance on campus' },
];

@Component({
  selector: 'app-why-choose',
  imports: [DrawDirective],
  templateUrl: './why-choose.html',
  styleUrl: './why-choose.css',
})
export class WhyChoose {
  protected readonly proof = PROOF;
}
