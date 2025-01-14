import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../core/button/button.component";

@Component({
  selector: 'app-contact',
  imports: [
    ButtonComponent, 
    ReactiveFormsModule, 
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  title = 'Contact Us';
  contactForm!: FormGroup;
  isValid : boolean = false;

  ngOnInit() {

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });


  }

  onSubmit() {
    const isValid = this.contactForm.valid;
    console.log(isValid);
  }

}
