import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./header.component.scss'],
  template: `
    <header class="site-header">
      <div class="header-inner">
        <a routerLink="/" class="logo">MDCI<span class="logo-accent">.</span>Consulting</a>
        <nav>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Accueil</a>
          <a routerLink="/portfolio/1" routerLinkActive="active" class="nav-link">Projets</a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
          <button
            class="theme-btn"
            (click)="toggleTheme()"
            [attr.aria-label]="themeService.isDarkMode() ? 'Passer en mode clair' : 'Passer en mode sombre'"
            type="button">
            <i [class]="themeService.isDarkMode() ? 'pi pi-sun' : 'pi pi-moon'"></i>
          </button>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
