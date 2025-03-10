import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ContactComponent } from '../../contact/features/contact.component';
import { RouterModule } from '@angular/router';
import { ProjectsService } from "../data-access/projects.service";
import { Project } from "../data-access/project.model";

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
  CommonModule,
  FormsModule,
  CarouselModule,
  InputTextModule,
  ButtonModule,
  TagModule,
  ContactComponent,
  InputTextareaModule,
  RouterModule,
  ]
})
export class AboutComponent implements OnInit {
private readonly projectsService = inject(ProjectsService);
yearsOfExperience = new Date().getFullYear() - 2018;
  dynamicTitle: string = '';
  presentation = 'en développement Full Stack, je mets mes compétences en Java, Angular et DevOps au service de solutions performantes et scalables. Passionné par les architectures modernes (Hexagonale, DDD) et les bonnes pratiques (TDD, Clean Code), je m\'efforce de livrer du code propre et maintenable. Toujours curieux, toujours en veille, prêt à relever de nouveaux défis !';
  texts = [
    "Consultant Full Stack",
    "Solide compétence en Java & Angular",
    "Passionné de DevOps & Cloud",
    "Architecte Logiciel",
    "Maîtrise de l'Architecture Hexagonale",
    "Engagé dans les Bonnes Pratiques"
  ];

  skills: string[] = [
    'Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate',
    'Angular', 'RxJS', 'Docker', 'CI/CD', 'DevOps', 'AWS', 'Terraform',
    'WebSocket', 'Clean Code', 'Architecture Hexagonale', 'DDD', 'TDD', 'Cypress'
  ];

  public projects: Project[] = [];

  textIndex = 0;
  letterIndex = 0;

  ngOnInit() {
    this.projectsService.get().subscribe((projects) => {
      this.projects = projects;
    });
    this.typeWriterEffect();
  }

  // Méthode pour télécharger le CV
 downloadCV() {
     const filePath = 'assets/documents/mon-cv.pdf'; // Chemin relatif ou URL distante
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
         URL.revokeObjectURL(link.href); // Libérer la mémoire
       })
       .catch(error => {
         console.error('Erreur lors du téléchargement :', error);
         alert('Le fichier n\'est pas disponible. Veuillez réessayer plus tard.');
       });
   }

  typeWriterEffect() {
    if (this.letterIndex < this.texts[this.textIndex].length) {
      this.dynamicTitle += this.texts[this.textIndex].charAt(this.letterIndex);
      this.letterIndex++;
      setTimeout(() => this.typeWriterEffect(), 100);
    } else {
      setTimeout(() => this.deleteText(), 1000);
    }
  }

  deleteText() {
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

