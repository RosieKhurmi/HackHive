import { Component } from '@angular/core';
import { MenuComponent } from '../../core/menu/menu.component'; 
import { FooterComponent } from '../../core/footer/footer.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ChallengesComponent } from '../../shared/challenges/challenges.component';
import { ContactComponent } from '../../shared/contact/contact.component';

@Component({
  selector: 'app-about',
  imports: [
    MenuComponent,
    FooterComponent,
    HeroComponent,
    ChallengesComponent,
    ContactComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {

}
