import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', loadComponent: () => import('./about/features/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./contact/features/contact.component').then(m => m.ContactComponent) },
  { path: 'portfolio/:id', loadComponent: () => import('./portfolio/features/portfolio.component').then(m => m.PortfolioComponent) },
  { path: '**', redirectTo: '' }
];
