import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProjectsService } from "../about/data-access/projects.service";
import { Project } from "../about/data-access/project.model";
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

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
     @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
       const projectId = Number(params.get('id'));

       this.projectsService.get().subscribe((projects) => {
         this.projects = projects;

         const projectIndex = this.projects.findIndex(p => p.id === projectId);
         if (projectIndex !== -1) {
           this.selectedIndex = projectIndex;
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
