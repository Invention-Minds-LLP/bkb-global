import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'BKG Global School | CBSE Day & Residential School in Sandur, Karnataka' },
  { path: '**', redirectTo: '' },
];
