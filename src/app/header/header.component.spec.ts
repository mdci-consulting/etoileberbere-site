import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header.component';
import { ThemeService } from '../shared/theme.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, NoopAnimationsModule],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideRouter([])
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 menu items', () => {
    expect(component.items.length).toBe(3);
  });

  it('should have Accueil, Projets, Contact labels', () => {
    const labels = component.items.map(i => i.label);
    expect(labels).toEqual(['Accueil', 'Projets', 'Contact']);
  });

  it('should toggle theme when toggleTheme is called', () => {
    const themeService = TestBed.inject(ThemeService);
    const initialMode = themeService.isDarkMode();
    component.toggleTheme();
    expect(themeService.isDarkMode()).toBe(!initialMode);
  });
});
