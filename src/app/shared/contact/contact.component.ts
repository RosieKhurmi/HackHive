import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../core/button/button.component";
import { environment } from '../../../environments/environment.uas';

@Component({
  selector: 'app-contact',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  title = 'Contact Us';
  contactForm!: FormGroup;
  isValid : boolean = false;

  emailServiceId = environment.emailjs.serviceId;
  emailTemplateId = environment.emailjs.templateId;
  emailUserId = environment.emailjs.userId;

  ngOnInit() {

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });


  }

  async onSubmit() {
    emailjs.init(this.emailUserId);
    let response = await emailjs.send(this.emailServiceId,this.emailTemplateId, {
      from_name: this.contactForm.value.name,
      to_name: "OTU CS Club",
      message: this.contactForm.value.message,
      reply_to: this.contactForm.value.email,
    });

    alert("Message sent successfully!");
    this.contactForm.reset();
  }

}
