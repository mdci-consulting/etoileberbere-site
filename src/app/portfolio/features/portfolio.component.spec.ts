import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent, NoopAnimationsModule],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: () => '1' }) }
        },
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty projects', () => {
    expect(component.projects).toEqual([]);
  });

  it('should initialize with selectedIndex 0', () => {
    expect(component.selectedIndex).toBe(0);
  });

  it('should load projects on init', () => {
    const mockProjects = [
      { id: 1, title: 'Projet 1', description: 'Desc', descriptionDetails: [], technologies: [], link: '', image: '' },
      { id: 2, title: 'Projet 2', description: 'Desc', descriptionDetails: [], technologies: [], link: '', image: '' }
    ];

    component.ngOnInit();

    // API call fallback to local
    const apiReq = httpMock.expectOne('/api/projects');
    apiReq.error(new ProgressEvent('error'));

    const fallbackReq = httpMock.expectOne('assets/projects.json');
    fallbackReq.flush(mockProjects);

    expect(component.projects.length).toBe(2);
    expect(component.selectedIndex).toBe(0);
  });
});
