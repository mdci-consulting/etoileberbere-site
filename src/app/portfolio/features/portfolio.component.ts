import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProjectsService } from "../../about/data-access/projects.service";
import { Project } from "../../about/data-access/project.model";

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

  selectedIndex = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.projectsService.get().subscribe((projects) => {
        this.projects = projects;
    });

    this.route.paramMap.subscribe(params => {
      const projectId = Number(params.get('id'));
      const projectIndex = this.projects.findIndex(p => p.id === projectId);

      if (projectIndex !== -1) {
         this.selectedIndex = projectIndex;
      }
      setTimeout(() => window.scrollTo({ top: 300, behavior: 'smooth' }), 200); // Scroller vers le carrousel
    });
  }
}
