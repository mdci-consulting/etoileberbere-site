import { Component, ElementRef, Inject, OnDestroy, OnInit, AfterViewInit, PLATFORM_ID, ViewChild, NgZone } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subject, Subscription, interval, takeUntil, take, concatMap, delay, of, tap, repeat } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectsService } from "../data-access/projects.service";
import { Project } from "../data-access/project.model";
import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        ToastModule,
    ],
    providers: [MessageService],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(30px)' }),
                animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;

    dynamicTitle: string = '';
    readonly texts = [
        "Consultant Full Stack",
        "Solide compétence en Java & Angular",
        "Passionné de DevOps & Cloud",
        "Architecte Logiciel",
        "Maîtrise de l'Architecture Hexagonale",
        "Engagé dans les Bonnes Pratiques"
    ];

    private hasStartedTyping = false;
    private destroy$ = new Subject<void>();
    private stopTyping$ = new Subject<void>();
    private observer!: IntersectionObserver;
    private routerSubscription!: Subscription;

    yearsOfExperience = new Date().getFullYear() - 2018;
    presentation = 'en développement Full Stack, je mets mes compétences en Java, Angular et DevOps au service de solutions performantes et scalables. Passionné par les architectures modernes (Hexagonale, DDD) et les bonnes pratiques (TDD, Clean Code), je m\'efforce de livrer du code propre et maintenable. Toujours curieux, toujours en veille, prêt à relever de nouveaux défis !';
    skills: string[] = [
        'Java', 'JEE', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Web', 'API REST', 'Hibernate', 'Postgres',
        'JUnit', 'Cucumber', 'Angular', 'RxJS', 'Docker', 'CI/CD', 'DevOps', 'AWS', 'Terraform', 'WebSocket', 'Clean Code',
        'Architecture Hexagonale', 'DDD', 'TDD', 'Jasmine', 'Cypress'
    ];

    projects: Project[] = [];
    isLoading = true;
    private readonly nameCv = 'CV_Youssef_Massaoudi_';
    private textIndex = 0;

    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object,
        private projectsService: ProjectsService,
        private messageService: MessageService,
        private seoService: SeoService,
        private ngZone: NgZone
    ) {
        this.routerSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.resetTyping();
                this.observeSection();
            }
        });
    }

    ngOnInit() {
        this.seoService.updateMeta(
            'MDCI Consulting - Youssef Massaoudi | Consultant Full Stack Java/Angular',
            'Portfolio de Youssef Massaoudi, consultant Full Stack Java/Angular avec expertise en Spring Boot, DevOps et architectures modernes.'
        );
        this.loadProjects();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.aboutSection) {
                this.observeSection();
            }
        });
    }

    ngOnDestroy(): void {
        this.stopTyping$.next();
        this.stopTyping$.complete();
        this.destroy$.next();
        this.destroy$.complete();
        this.observer?.disconnect();
        this.routerSubscription?.unsubscribe();
    }

    loadProjects(): void {
        this.projectsService.get().subscribe({
            next: (data) => {
                this.projects = data;
                this.isLoading = false;
            },
            error: () => {
                this.isLoading = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Erreur lors du chargement des projets'
                });
            },
        });
    }

    downloadCV() {
        const filePath = 'assets/documents/CV_Youssef_Massaoudi.pdf';
        const now = new Date();
        const formattedDate = now.toISOString().split('T')[0];
        const fileName = `${this.nameCv}${formattedDate}.pdf`;

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
            .catch(() => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Le fichier n\'est pas disponible. Veuillez réessayer plus tard.'
                });
            });
    }

    private observeSection() {
        if (!this.aboutSection) return;
        if (!isPlatformBrowser(this.platformId) || this.hasStartedTyping) return;

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !this.hasStartedTyping) {
                    this.hasStartedTyping = true;
                    this.startTypewriter();
                    this.observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        this.observer.observe(this.aboutSection.nativeElement);
    }

    private resetTyping() {
        this.stopTyping$.next();
        this.hasStartedTyping = false;
        this.dynamicTitle = '';
        this.textIndex = 0;
    }

    private startTypewriter(): void {
        this.ngZone.runOutsideAngular(() => {
            of(null).pipe(
                // Pour chaque texte : taper → pause → supprimer → pause → suivant
                concatMap(() => this.typeAndDelete$()),
                repeat(),
                takeUntil(this.stopTyping$),
                takeUntil(this.destroy$)
            ).subscribe();
        });
    }

    private typeAndDelete$() {
        const text = this.texts[this.textIndex];
        const typeLength = text.length;
        const typeSpeed = 100;
        const deleteSpeed = 50;

        return of(null).pipe(
            // Taper lettre par lettre
            concatMap(() => interval(typeSpeed).pipe(
                take(typeLength),
                tap(i => this.ngZone.run(() => {
                    this.dynamicTitle = text.substring(0, i + 1);
                }))
            )),
            // Pause après avoir tapé
            concatMap(() => of(null).pipe(delay(1000))),
            // Supprimer lettre par lettre
            concatMap(() => interval(deleteSpeed).pipe(
                take(typeLength),
                tap(i => this.ngZone.run(() => {
                    this.dynamicTitle = text.substring(0, typeLength - i - 1);
                }))
            )),
            // Pause avant le texte suivant + avancer l'index
            concatMap(() => of(null).pipe(
                delay(500),
                tap(() => {
                    this.textIndex = (this.textIndex + 1) % this.texts.length;
                })
            ))
        );
    }
}
