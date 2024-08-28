import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private messageService: MessageService) {}

  sendEmail(): void {
    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      message: this.contactForm.message,
    };

    emailjs
      .send(
        'service_rhfmjii',
        'template_ro3zmfo',
        templateParams,
        'Rm-eoqw2KFad4BxGp'
      )
      .then(
        (response: EmailJSResponseStatus) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Email was sent Successfully',
            detail:
              "Thank your for contacting me. You'll hear back from me soon.",
          });
          // Optionally, reset the form here
          this.contactForm = {
            name: '',
            email: '',
            message: '',
          };
        },
        (error) => {
          this.messageService.add({
            severity: 'success',
            summary: "Email couldn't be sent",
            detail: 'Please contact swapnilsharmasarker@gmail.com',
          });
        }
      );
  }
}
