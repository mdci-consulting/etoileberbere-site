import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule],
  styleUrls: ['./header.component.scss'],
  template: `
   <header class="custom-header">
     <p-menubar [model]="items" class="custom-menubar">
       <ng-template pTemplate="end">
         <button
           pButton
           [icon]="themeService.isDarkMode() ? 'pi pi-sun' : 'pi pi-moon'"
           (click)="toggleTheme()"
           class="theme-toggle-btn"
           [attr.aria-label]="themeService.isDarkMode() ? 'Passer en mode clair' : 'Passer en mode sombre'"
           type="button"
         ></button>
       </ng-template>
     </p-menubar>
   </header>
  `
})
export class HeaderComponent {
  items = [
    { label: 'Accueil', routerLink: '/' },
    { label: 'Projets', routerLink: ['/portfolio', 1] },
    { label: 'Contact', routerLink: '/contact' }
  ];

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
