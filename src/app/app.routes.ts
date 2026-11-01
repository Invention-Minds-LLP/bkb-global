import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'BKB Global — Book a school visit' },
  { path: '**', redirectTo: '' },
];
