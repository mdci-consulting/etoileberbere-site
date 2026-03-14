import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {

    constructor(private meta: Meta, private title: Title) {}

    updateMeta(title: string, description: string, imageUrl?: string): void {
        this.title.setTitle(title);

        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:locale', content: 'fr_FR' });
        this.meta.updateTag({ property: 'og:site_name', content: 'MDCI Consulting' });

        if (imageUrl) {
            this.meta.updateTag({ property: 'og:image', content: imageUrl });
        }
    }
}
