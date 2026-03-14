import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, ToastModule],
    providers: [MessageService]
})
export class ContactComponent {
    contactForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private http: HttpClient,
        private messageService: MessageService
    ) {
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
                this.messageService.add({
                    severity: 'success',
                    summary: 'Envoyé',
                    detail: 'Formulaire envoyé avec succès !'
                });
                this.contactForm.reset();
            },
            error: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: "Une erreur est survenue lors de l'envoi."
                });
            }
        });
    }

    get f() {
        return this.contactForm.controls;
    }
}
