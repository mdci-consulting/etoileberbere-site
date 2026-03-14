import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private dark = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      this.dark = saved !== 'light';
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

    if (this.dark) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }
}
