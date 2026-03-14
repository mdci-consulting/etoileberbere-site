import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    // Créer l'élément theme link pour les tests
    let themeLink = document.getElementById('app-theme');
    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.id = 'app-theme';
      document.head.appendChild(themeLink);
    }
  });

  afterEach(() => {
    localStorage.clear();
  });

  function createService(platform: string = 'browser') {
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: PLATFORM_ID, useValue: platform }
      ]
    });
    return TestBed.inject(ThemeService);
  }

  it('should be created', () => {
    service = createService();
    expect(service).toBeTruthy();
  });

  it('should default to light mode', () => {
    service = createService();
    expect(service.isDarkMode()).toBeFalse();
  });

  it('should toggle to dark mode', () => {
    service = createService();
    service.toggleTheme();
    expect(service.isDarkMode()).toBeTrue();
  });

  it('should toggle back to light mode', () => {
    service = createService();
    service.toggleTheme();
    service.toggleTheme();
    expect(service.isDarkMode()).toBeFalse();
  });

  it('should persist theme in localStorage', () => {
    service = createService();
    service.toggleTheme();
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('should read theme from localStorage on init', () => {
    localStorage.setItem('theme', 'dark');
    service = createService();
    expect(service.isDarkMode()).toBeTrue();
  });

  it('should update theme link href', () => {
    service = createService();
    service.toggleTheme();
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    expect(themeLink.href).toContain('lara-dark-indigo');
  });

  it('should toggle body dark-mode class', () => {
    service = createService();
    service.toggleTheme();
    expect(document.body.classList.contains('dark-mode')).toBeTrue();
    service.toggleTheme();
    expect(document.body.classList.contains('dark-mode')).toBeFalse();
  });
});
