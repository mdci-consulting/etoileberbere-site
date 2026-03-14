import { Component, OnInit, inject, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProjectsService } from "../../about/data-access/projects.service";
import { Project } from "../../about/data-access/project.model";
import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    imports: [CommonModule, CarouselModule, ButtonModule, CardModule, TagModule]
})
export class PortfolioComponent implements OnInit {
    private readonly projectsService = inject(ProjectsService);
    public projects: Project[] = [];
    public selectedIndex: number = 0;

    constructor(
        private route: ActivatedRoute,
        @Inject(PLATFORM_ID) private platformId: Object,
        private seoService: SeoService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const projectId = Number(params.get('id'));

            this.projectsService.get().subscribe((projects) => {
                this.projects = projects;

                const projectIndex = this.projects.findIndex(p => p.id === projectId);
                if (projectIndex !== -1) {
                    this.selectedIndex = projectIndex;
                    const project = this.projects[projectIndex];
                    this.seoService.updateMeta(
                        `${project.title} - Portfolio MDCI Consulting`,
                        project.description,
                        project.image
                    );
                } else {
                    this.seoService.updateMeta(
                        'Portfolio - MDCI Consulting',
                        'Découvrez les projets réalisés par Youssef Massaoudi.'
                    );
                }

                if (isPlatformBrowser(this.platformId)) {
                    setTimeout(() => {
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                    }, 300);
                }
            });
        });
    }
}
