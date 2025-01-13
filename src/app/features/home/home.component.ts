import { Component } from '@angular/core';
import { MenuComponent } from '../../core/menu/menu.component'; 
import { FooterComponent } from '../../core/footer/footer.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { PastComponent } from '../../shared/past/past.component';
import { ButtonComponent } from "../../core/button/button.component";

@Component({
  selector: 'app-home',
  imports: [
    MenuComponent,
    FooterComponent,
    HeroComponent,
    PastComponent,
    ButtonComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
