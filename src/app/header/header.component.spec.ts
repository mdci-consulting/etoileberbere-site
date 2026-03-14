import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ThemeService } from '../shared/theme.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
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

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(links.length).toBe(3);
  });

  it('should render logo', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const logo = fixture.nativeElement.querySelector('.logo');
    expect(logo.textContent).toContain('MDCI');
  });

  it('should toggle theme when button is clicked', () => {
    const themeService = TestBed.inject(ThemeService);
    const initialMode = themeService.isDarkMode();
    component.toggleTheme();
    expect(themeService.isDarkMode()).toBe(!initialMode);
  });
});
