import { Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { projectIds } from './main/about/data-access/project.model';

export const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
     path: 'portfolio/:id',
     component: PortfolioComponent
   },
  { path: '**', redirectTo: '' }
];
