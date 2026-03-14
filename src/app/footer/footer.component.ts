import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .site-footer {
      text-align: center;
      padding: 1.5rem;
      color: var(--text-secondary);
      font-size: 0.85rem;
      border-top: 1px solid var(--border-subtle);
      margin-top: auto;
    }
    .footer-accent { color: var(--accent); }
  `],
  template: `
    <footer class="site-footer" role="contentinfo">
      <span class="footer-accent">&copy;</span> {{ currentYear }} - Youssef Massaoudi | Full Stack Consultant Java / Angular
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
