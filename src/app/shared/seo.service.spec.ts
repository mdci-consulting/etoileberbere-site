import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let meta: Meta;
  let title: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoService]
    });
    service = TestBed.inject(SeoService);
    meta = TestBed.inject(Meta);
    title = TestBed.inject(Title);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update page title', () => {
    service.updateMeta('Test Title', 'Test description');
    expect(title.getTitle()).toBe('Test Title');
  });

  it('should update description meta tag', () => {
    service.updateMeta('Title', 'Ma description');
    const tag = meta.getTag('name="description"');
    expect(tag?.content).toBe('Ma description');
  });

  it('should update og:title meta tag', () => {
    service.updateMeta('Mon Titre', 'Description');
    const tag = meta.getTag('property="og:title"');
    expect(tag?.content).toBe('Mon Titre');
  });

  it('should update og:description meta tag', () => {
    service.updateMeta('Title', 'Ma description OG');
    const tag = meta.getTag('property="og:description"');
    expect(tag?.content).toBe('Ma description OG');
  });

  it('should set og:locale to fr_FR', () => {
    service.updateMeta('Title', 'Desc');
    const tag = meta.getTag('property="og:locale"');
    expect(tag?.content).toBe('fr_FR');
  });

  it('should set og:site_name to MDCI Consulting', () => {
    service.updateMeta('Title', 'Desc');
    const tag = meta.getTag('property="og:site_name"');
    expect(tag?.content).toBe('MDCI Consulting');
  });

  it('should update og:image when imageUrl is provided', () => {
    service.updateMeta('Title', 'Desc', 'https://example.com/image.jpg');
    const tag = meta.getTag('property="og:image"');
    expect(tag?.content).toBe('https://example.com/image.jpg');
  });

  it('should not update og:image when imageUrl is not provided', () => {
    // Remove any existing og:image tag
    meta.removeTag('property="og:image"');
    service.updateMeta('Title', 'Desc');
    const tag = meta.getTag('property="og:image"');
    expect(tag).toBeNull();
  });
});
