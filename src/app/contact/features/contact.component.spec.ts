import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, NoopAnimationsModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form by default', () => {
    expect(component.contactForm.valid).toBeFalse();
  });

  it('should require name field', () => {
    const name = component.f['name'];
    expect(name.errors?.['required']).toBeTrue();
  });

  it('should require email field', () => {
    const email = component.f['email'];
    expect(email.errors?.['required']).toBeTrue();
  });

  it('should validate email format', () => {
    component.f['email'].setValue('invalid');
    expect(component.f['email'].errors?.['email']).toBeTrue();

    component.f['email'].setValue('valid@email.com');
    expect(component.f['email'].errors).toBeNull();
  });

  it('should require subject field', () => {
    expect(component.f['subject'].errors?.['required']).toBeTrue();
  });

  it('should require message field', () => {
    expect(component.f['message'].errors?.['required']).toBeTrue();
  });

  it('should be valid when all fields are filled', () => {
    component.contactForm.patchValue({
      name: 'Test',
      email: 'test@test.com',
      subject: 'Sujet',
      message: 'Message'
    });
    expect(component.contactForm.valid).toBeTrue();
  });

  it('should not send if form is invalid', () => {
    component.sendMessage();
    httpMock.expectNone('https://formspree.io/f/mnnjeokb');
  });

  it('should send HTTP POST when form is valid', () => {
    component.contactForm.patchValue({
      name: 'Test',
      email: 'test@test.com',
      subject: 'Sujet',
      message: 'Message'
    });
    component.sendMessage();

    const req = httpMock.expectOne('https://formspree.io/f/mnnjeokb');
    expect(req.request.method).toBe('POST');
    expect(req.request.body.name).toBe('Test');
    req.flush({});
  });

  it('should reset form after successful send', () => {
    component.contactForm.patchValue({
      name: 'Test',
      email: 'test@test.com',
      subject: 'Sujet',
      message: 'Message'
    });
    component.sendMessage();

    const req = httpMock.expectOne('https://formspree.io/f/mnnjeokb');
    req.flush({});

    expect(component.contactForm.value.name).toBeNull();
  });
});
