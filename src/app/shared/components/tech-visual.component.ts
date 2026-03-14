import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechIcon {
  name: string;
  shortName: string;
  icon: string;
}

const TECH_MAP: Record<string, { icon: string; short: string }> = {
  'java': { icon: 'devicon-java-plain', short: 'Java' },
  'java 21': { icon: 'devicon-java-plain', short: 'Java 21' },
  'spring boot': { icon: 'devicon-spring-original', short: 'Boot' },
  'spring data jpa': { icon: 'devicon-spring-original', short: 'Data JPA' },
  'spring security': { icon: 'devicon-spring-original', short: 'Security' },
  'spring web': { icon: 'devicon-spring-original', short: 'Web' },
  'angular': { icon: 'devicon-angular-plain', short: 'Angular' },
  'docker': { icon: 'devicon-docker-plain', short: 'Docker' },
  'terraform': { icon: 'devicon-terraform-plain', short: 'Terraform' },
  'aws': { icon: 'devicon-amazonwebservices-plain-wordmark', short: 'AWS' },
  'nginx': { icon: 'devicon-nginx-original', short: 'Nginx' },
  'h2 database': { icon: 'devicon-postgresql-plain', short: 'H2' },
  'h2': { icon: 'devicon-postgresql-plain', short: 'H2' },
  'postgres': { icon: 'devicon-postgresql-plain', short: 'Postgres' },
  'junit 5 & mockito': { icon: 'devicon-junit-plain', short: 'JUnit' },
  'junit': { icon: 'devicon-junit-plain', short: 'JUnit' },
  'maven': { icon: 'devicon-maven-plain', short: 'Maven' },
  'swagger': { icon: 'devicon-swagger-plain', short: 'Swagger' },
  'swagger (documentation api)': { icon: 'devicon-swagger-plain', short: 'Swagger' },
  'material': { icon: 'devicon-materialui-plain', short: 'Material' },
  'websocket': { icon: 'devicon-socketio-original', short: 'WebSocket' },
  'cypress': { icon: 'devicon-cypressio-plain', short: 'Cypress' },
  'karma-jasmine': { icon: 'devicon-jasmine-original', short: 'Jasmine' },
  'jasmine': { icon: 'devicon-jasmine-original', short: 'Jasmine' },
  'ci/cd': { icon: 'devicon-githubactions-plain', short: 'CI/CD' },
  'gitlab ci': { icon: 'devicon-gitlab-plain', short: 'GitLab CI' },
  'rxjs': { icon: 'devicon-rxjs-plain', short: 'RxJS' },
  'typescript': { icon: 'devicon-typescript-plain', short: 'TypeScript' },
  'git': { icon: 'devicon-git-plain', short: 'Git' },
  'api rest': { icon: 'devicon-fastapi-plain', short: 'API REST' },
  'jwt': { icon: 'devicon-json-plain', short: 'JWT' },
  'authentification avec jwt': { icon: 'devicon-json-plain', short: 'JWT' },
  'architecture hexagonale': { icon: 'devicon-archlinux-plain', short: 'Hexa' },
  'ddd': { icon: 'devicon-devto-plain', short: 'DDD' },
  'tdd': { icon: 'devicon-junit-plain', short: 'TDD' },
  'mapstruct': { icon: 'devicon-java-plain', short: 'MapStruct' },
  'certbot (let\'s encrypt)': { icon: 'devicon-letsencrypt-plain', short: 'Certbot' },
  'jakarta validation': { icon: 'devicon-java-plain', short: 'Jakarta' },
  'mockito': { icon: 'devicon-junit-plain', short: 'Mockito' },
  'hibernate': { icon: 'devicon-hibernate-plain', short: 'Hibernate' },
};

const GRADIENTS = [
  'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0d9488 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #0f172a 0%, #3b1f6e 50%, #6b21a8 100%)',
  'linear-gradient(135deg, #0f172a 0%, #164e63 50%, #0e7490 100%)',
];

@Component({
  selector: 'app-tech-visual',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tech-visual" [style.background]="gradient">
      <div class="tech-icons">
        <div *ngFor="let tech of visibleTechs" class="tech-icon" [title]="tech.name">
          <i [class]="tech.icon"></i>
          <span class="tech-name">{{ tech.shortName }}</span>
        </div>
      </div>
      <span class="tech-label">{{ label }}</span>
    </div>
  `,
  styles: [`
    .tech-visual {
      width: 100%;
      height: 100%;
      min-height: 180px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1.5rem;
      position: relative;
      overflow: hidden;
    }

    .tech-icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .tech-icon {
      width: 56px;
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 6px 4px;
      transition: transform 0.2s, background 0.2s;
    }

    .tech-icon:hover {
      transform: scale(1.15);
      background: rgba(255, 255, 255, 0.2);
    }

    .tech-icon i {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.9);
    }

    .tech-name {
      font-size: 0.6rem;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      line-height: 1.1;
      max-width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tech-label {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 600;
    }
  `]
})
export class TechVisualComponent {
  @Input() technologies: string[] = [];
  @Input() projectIndex: number = 0;
  @Input() label: string = '';

  get gradient(): string {
    return GRADIENTS[this.projectIndex % GRADIENTS.length];
  }

  get visibleTechs(): TechIcon[] {
    const seen = new Set<string>();
    return this.technologies
      .map(tech => {
        const entry = TECH_MAP[tech.toLowerCase()];
        return entry ? { name: tech, shortName: entry.short, icon: entry.icon } : null;
      })
      .filter((t): t is TechIcon => {
        if (!t) return false;
        // Éviter les doublons d'icônes (ex: 2x Spring)
        const key = t.icon + t.shortName;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 8);
  }
}
