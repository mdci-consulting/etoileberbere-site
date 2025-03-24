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
           icon="pi pi-moon"
           (click)="toggleTheme()"
           class="theme-toggle-btn"
           aria-label="Changer le thème"
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

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

