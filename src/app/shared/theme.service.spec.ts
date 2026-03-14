import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    document.body.classList.remove('dark-mode', 'light-mode');
  });

  afterEach(() => {
    localStorage.clear();
    document.body.classList.remove('dark-mode', 'light-mode');
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

  it('should default to dark mode', () => {
    service = createService();
    expect(service.isDarkMode()).toBeTrue();
  });

  it('should toggle to light mode', () => {
    service = createService();
    service.toggleTheme();
    expect(service.isDarkMode()).toBeFalse();
  });

  it('should toggle back to dark mode', () => {
    service = createService();
    service.toggleTheme();
    service.toggleTheme();
    expect(service.isDarkMode()).toBeTrue();
  });

  it('should persist theme in localStorage', () => {
    service = createService();
    service.toggleTheme();
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('should read light theme from localStorage on init', () => {
    localStorage.setItem('theme', 'light');
    service = createService();
    expect(service.isDarkMode()).toBeFalse();
  });

  it('should add dark-mode class on body by default', () => {
    service = createService();
    expect(document.body.classList.contains('dark-mode')).toBeTrue();
  });

  it('should switch to light-mode class on toggle', () => {
    service = createService();
    service.toggleTheme();
    expect(document.body.classList.contains('light-mode')).toBeTrue();
    expect(document.body.classList.contains('dark-mode')).toBeFalse();
  });
});
