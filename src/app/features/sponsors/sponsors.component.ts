import { Component } from '@angular/core';
import { MenuComponent } from '../../core/menu/menu.component';
import { SponsorCardComponent } from '../../shared/sponsor-card/sponsor-card.component';
import { FooterComponent } from '../../core/footer/footer.component';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  standalone: true,
  imports: [
    MenuComponent, 
    SponsorCardComponent, 
    FooterComponent
  ],
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent {
  
}
