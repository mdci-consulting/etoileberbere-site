import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private dark = false;

  toggleTheme(): void {
    this.dark = !this.dark;
    const themeName = this.dark ? 'lara-dark-indigo' : 'lara-light-blue';

    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `assets/themes/${themeName}/theme.css`;
    }

    document.body.classList.toggle('dark-mode', this.dark);
  }

  isDarkMode(): boolean {
    return this.dark;
  }
}
