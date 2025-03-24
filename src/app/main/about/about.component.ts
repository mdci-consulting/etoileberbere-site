import { Component, ElementRef, Inject, OnDestroy, AfterViewInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectsService } from "./data-access/projects.service";
import { Project } from "./data-access/project.model";

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    CommonModule,
    ButtonModule,
     CarouselModule,
     ButtonModule,
     TagModule,
     RouterModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
 export class AboutComponent implements AfterViewInit, OnDestroy {
    @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;

    dynamicTitle: string = '';
    texts = [
            "Consultant Full Stack",
            "Solide compétence en Java & Angular",
            "Passionné de DevOps & Cloud",
            "Architecte Logiciel",
            "Maîtrise de l'Architecture Hexagonale",
            "Engagé dans les Bonnes Pratiques"
    ];
    textIndex = 0;
    letterIndex = 0;
    hasStartedTyping = false;
    destroyed = false;
    private observer!: IntersectionObserver;
    private routerSubscription!: Subscription;

    yearsOfExperience = new Date().getFullYear() - 2018;
    presentation = 'en développement Full Stack, je mets mes compétences en Java, Angular et DevOps au service de solutions performantes et scalables. Passionné par les architectures modernes (Hexagonale, DDD) et les bonnes pratiques (TDD, Clean Code), je m\'efforce de livrer du code propre et maintenable. Toujours curieux, toujours en veille, prêt à relever de nouveaux défis !';
    skills: string[] = [
        'Java', 'JEE', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Web', 'API REST','Hibernate', 'Postgres',
        'JUnit', 'Cucumber', 'Angular', 'RxJS', 'Docker', 'CI/CD', 'DevOps', 'AWS', 'Terraform', 'WebSocket', 'Clean Code',
        'Architecture Hexagonale', 'DDD', 'TDD', 'Jasmine', 'Cypress'
    ];

    projects: Project[] = [];
    isLoading = true;
    errorMessage = '';

    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object,
        private projectsService: ProjectsService
    ) {
        this.routerSubscription = this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.resetTyping();
            this.observeSection();
          }
        });
      }

    ngOnInit() {
       this.loadProjects();
    }

    loadProjects(): void {
             this.projectsService.get().subscribe({
               next: (data) => {
                 this.projects = data;
                 this.isLoading = false;
               },
               error: (err) => {
                 this.errorMessage = 'Erreur lors du chargement des projets';
                 this.isLoading = false;
                 console.error(err);
               },
             });
    }

     // Méthode pour télécharger le CV
     downloadCV() {
             const filePath = 'assets/documents/mon-cv.pdf';
             const fileName = 'mon-cv.pdf';

             fetch(filePath)
               .then(response => {
                 if (!response.ok) {
                   throw new Error('Fichier non trouvé');
                 }
                 return response.blob();
               })
               .then(blob => {
                 const link = document.createElement('a');
                 link.href = URL.createObjectURL(blob);
                 link.download = fileName;
                 link.click();
                 URL.revokeObjectURL(link.href);
               })
               .catch(error => {
                 console.error('Erreur lors du téléchargement :', error);
                 alert('Le fichier n\'est pas disponible. Veuillez réessayer plus tard.');
               });
     }

     ngAfterViewInit(): void {
        const isBrowser = isPlatformBrowser(this.platformId);
        setTimeout(() => {
          if (this.aboutSection) {
            this.observeSection();
          } else {
            console.warn('aboutSection still not found – will skip observer.');
          }
        });
     }

    ngOnDestroy(): void {
        this.destroyed = true;
        this.observer?.disconnect();
        this.routerSubscription?.unsubscribe();
    }


    private observeSection() {
        if (!this.aboutSection) {
            console.warn('aboutSection is undefined!');
            return;
        }
        const isBrowser = isPlatformBrowser(this.platformId);
        if (!isBrowser || !this.aboutSection || this.hasStartedTyping) return;

        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasStartedTyping) {
              this.hasStartedTyping = true;
              this.typeWriterEffect();
              this.observer.disconnect();
            }
          });
        }, { threshold: 0.2 });

        this.observer.observe(this.aboutSection.nativeElement);
    }

    private resetTyping() {
        this.hasStartedTyping = false;
        this.dynamicTitle = '';
        this.letterIndex = 0;
        this.textIndex = 0;
    }

    private typeWriterEffect(): void {
        if (this.destroyed) return;

        if (this.letterIndex < this.texts[this.textIndex].length) {
          this.dynamicTitle += this.texts[this.textIndex].charAt(this.letterIndex);
          this.letterIndex++;
        setTimeout(() => this.typeWriterEffect(), 100);
        }  else {
          setTimeout(() => this.deleteText(), 1000);
        }
    }

    private deleteText(): void {
        if (this.destroyed) return;

        if (this.letterIndex > 0) {
          this.dynamicTitle = this.dynamicTitle.slice(0, -1);
          this.letterIndex--;
          setTimeout(() => this.deleteText(), 50);
        } else {
          this.textIndex = (this.textIndex + 1) % this.texts.length;
          setTimeout(() => this.typeWriterEffect(), 500);
        }
    }
 }

