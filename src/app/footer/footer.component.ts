import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="text-center p-3 mt-4 bg-gray-200">
     © {{ currentYear }} - Youssef Massaoudi | Full Stack Consultant Java / Angular
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
