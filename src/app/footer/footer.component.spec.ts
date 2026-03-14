import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have current year', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    expect(fixture.componentInstance.currentYear).toBe(new Date().getFullYear());
  });

  it('should render copyright text', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Youssef Massaoudi');
  });

  it('should have role contentinfo on footer', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const footer = fixture.nativeElement.querySelector('footer');
    expect(footer.getAttribute('role')).toBe('contentinfo');
  });
});
