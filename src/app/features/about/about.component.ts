import { Component } from '@angular/core';
import { MenuComponent } from '../../core/menu/menu.component'; 
import { FooterComponent } from '../../core/footer/footer.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ExpandableComponent } from '../../shared/expandable/expandable.component';
import { ChallengesComponent } from '../../shared/challenges/challenges.component';

@Component({
  selector: 'app-about',
  imports: [
    MenuComponent,
    FooterComponent,
    HeroComponent,
    ChallengesComponent,
    ExpandableComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {

}
