import { Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import sponsorsList from '../../../assets/sponsors-list.json';
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
    FooterComponent, 
    CommonModule
  ],
  styleUrls: ['./sponsors.component.css']
})

export class SponsorsComponent {
  
  sponsors: {
    name: string, 
    logo: string, 
    url: string, 
    tier: string,
    description?: string
  }[] = sponsorsList;


}
