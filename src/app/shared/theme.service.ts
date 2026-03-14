import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private dark = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      this.dark = saved === 'dark';
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.dark = !this.dark;
    this.applyTheme();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.dark ? 'dark' : 'light');
    }
  }

  isDarkMode(): boolean {
    return this.dark;
  }

  private applyTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const themeName = this.dark ? 'lara-dark-indigo' : 'lara-light-blue';
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `assets/themes/${themeName}/theme.css`;
    }
    document.body.classList.toggle('dark-mode', this.dark);
  }
}
