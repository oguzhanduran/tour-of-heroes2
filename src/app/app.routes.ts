import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    'path': 'heroes',
    loadComponent: () => import('./components/heroes/heroes.component').then(c => c.HeroesComponent)
  },
  {
    'path': 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    'path': 'detail/:id',
    loadComponent: () => import('./components/hero-detail/hero-detail.component').then(c => c.HeroDetailComponent)
  },

];
