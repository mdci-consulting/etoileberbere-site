import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ProjectsService } from './projects.service';
import { Project } from './project.model';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpMock: HttpTestingController;

  const mockProjects: Project[] = [
    {
      id: 1,
      title: 'Test Projet',
      description: 'Description test',
      descriptionDetails: ['Detail 1'],
      technologies: ['Java', 'Angular'],
      link: 'https://github.com/test',
      image: 'assets/test.jpg'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ProjectsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch projects from API', () => {
    service.get().subscribe(projects => {
      expect(projects.length).toBe(1);
      expect(projects[0].title).toBe('Test Projet');
    });

    const req = httpMock.expectOne('/api/projects');
    expect(req.request.method).toBe('GET');
    req.flush(mockProjects);
  });

  it('should fallback to local JSON on API error', () => {
    service.get().subscribe(projects => {
      expect(projects.length).toBe(1);
    });

    const apiReq = httpMock.expectOne('/api/projects');
    apiReq.error(new ProgressEvent('error'));

    const fallbackReq = httpMock.expectOne('assets/projects.json');
    fallbackReq.flush(mockProjects);
  });
});
