import { Component } from '@angular/core';

type Art = 'trophy' | 'diya' | 'cap' | 'flag' | 'flower' | 'flute';

/* Events listed on the school's Happenings pages (Past and Present). */
const EVENTS: { title: string; when: 'Past' | 'Recent'; art: Art }[] = [
  { title: 'Sports Day', when: 'Past', art: 'trophy' },
  { title: 'Founder’s Day', when: 'Past', art: 'diya' },
  { title: 'Graduation Day', when: 'Past', art: 'cap' },
  { title: 'Kargil Diwas', when: 'Recent', art: 'flag' },
  { title: 'Varamahalakshmi', when: 'Recent', art: 'flower' },
  { title: 'Krishna Janmashtami', when: 'Recent', art: 'flute' },
];

/* Latest posts from the school blog, with their published dates. */
const POSTS = [
  { title: 'Board exam preparation checklist for students and parents', date: '29 June 2026' },
  { title: 'How CBSE education supports competitive exam preparation', date: '23 June 2026' },
  { title: 'Top 10 practical life skills every student should learn early', date: '22 May 2026' },
];

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.html',
  styleUrl: './news-events.css',
})
export class NewsEvents {
  protected readonly events = EVENTS;
  protected readonly posts = POSTS;
  protected readonly happeningsUrl = 'https://bkgglobalschool.com/bkg_happenings/';
  protected readonly blogUrl = 'https://bkgglobalschool.com/blog/';
}
