import { Routes } from '@angular/router';
import { AboutComponent } from './about/features/about.component';
import { ContactComponent } from './contact/features/contact.component';
import { PortfolioComponent } from './portfolio/features/portfolio.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
   { path: 'home', component: AboutComponent },
   { path: 'about', component: AboutComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'portfolio/:id', component: PortfolioComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: '**', redirectTo: 'home' }
];

