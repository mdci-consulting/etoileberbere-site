import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, ButtonModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.contactForm.invalid) {
      return;
    }

    const formData = this.contactForm.value;
    const formspreeEndpoint = 'https://formspree.io/f/mnnjeokb';

    this.http.post(formspreeEndpoint, formData).subscribe({
      next: () => {
        this.successMessage = 'Message envoyé avec succès !';
        this.contactForm.reset();
      },
      error: () => {
        this.errorMessage = 'Erreur lors de l’envoi du message.';
      }
    });
  }
}
