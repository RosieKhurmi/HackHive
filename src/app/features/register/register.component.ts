import { Component } from '@angular/core';
import { MenuComponent } from '../../core/menu/menu.component';
import { FooterComponent } from "../../core/footer/footer.component"; 

@Component({
  selector: 'app-register',
  imports: [MenuComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
