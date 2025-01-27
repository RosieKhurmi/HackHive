import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import  {environment } from '../../../enviroments/environment.uas';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {

  private destroyRef = inject(DestroyRef);
  title = 'Contact Us';
  isValid : boolean = false;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  get nameValid() {
    return (
      this.contactForm.controls['name'].invalid && 
      this.contactForm.controls['name'].dirty && 
      this.contactForm.controls['name'].touched
    );
  }

  get emailValid() {
    return (
      this.contactForm.controls['email'].touched &&
      this.contactForm.controls['email'].invalid &&
      this.contactForm.controls['email'].dirty 
    );
  }

  get messageValid() {
    return (
      this.contactForm.controls['message'].touched &&
      this.contactForm.controls['message'].invalid &&
      this.contactForm.controls['message'].dirty 
    );
  }

  ngOnInit(): void {
    
    const subscription = this.contactForm.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        window.localStorage.setItem(
          'contactForm', 
          JSON.stringify(value)
        );
      },

    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

  }

  emailServiceId = environment.emailjs.serviceId;
  emailTemplateId = environment.emailjs.templateId;
  emailUserId = environment.emailjs.userId;

  async onSubmit() {
    emailjs.init(this.emailUserId);

    if(!(this.contactForm.value.name)|| !(this.contactForm.value.message) || !(this.contactForm.value.email)) {
      alert("Fill in the required fields");
    }
    else {

      let response = await emailjs.send(this.emailServiceId,this.emailTemplateId, {
        from_name: this.contactForm.value.name,
        to_name: "OTU CS Club",
        message: this.contactForm.value.message,
        reply_to: this.contactForm.value.email,
      });

      console.log(JSON.stringify(this.contactForm.value));
      alert("Message sent successfully!");
      this.contactForm.reset();
    }
  }

}
