import { Component, AfterViewInit, OnInit } from '@angular/core';
import { startMatrixEffect } from '../assets/matrix-effect';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CommonModule, FormsModule, ToggleButtonModule]
})
export class AppComponent implements OnInit, AfterViewInit {
  isDarkMode = true;

  ngOnInit() {
      // Récupérer le mode stocké et appliquer le thème au chargement
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    }

  ngAfterViewInit() {
    startMatrixEffect();
    //this.applyTheme();
  }

   toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.applyTheme();
    }

   applyTheme() {
      const lightTheme = "assets/themes/lara-light-blue/theme.css";
      const darkTheme = "assets/themes/lara-dark-blue/theme.css";

      let themeLink = document.getElementById('theme-link') as HTMLLinkElement;

      if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.id = 'theme-link';
        themeLink.rel = 'stylesheet';
        document.head.appendChild(themeLink);
      }

      // Mettre à jour le thème selon le mode
      themeLink.href = this.isDarkMode ? darkTheme : lightTheme;

      // Appliquer des classes CSS pour gérer le mode sombre sur l'ensemble de l'UI
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      document.body.classList.toggle('light-mode', !this.isDarkMode);
   }
}

