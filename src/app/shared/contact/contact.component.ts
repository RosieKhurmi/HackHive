import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../core/button/button.component";

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  onSubmit() {
    console.log('Form submitted');
  }

}
