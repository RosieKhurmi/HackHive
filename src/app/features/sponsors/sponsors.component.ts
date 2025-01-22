import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import sponsorsList from '../../../assets/sponsors-list.json';
import { MenuComponent } from '../../core/menu/menu.component';
import { SponsorCardComponent } from '../../shared/sponsor-card/sponsor-card.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  standalone: true,
  imports: [
    MenuComponent,
    SponsorCardComponent,
    FooterComponent,
    CommonModule,
    CarouselComponent,
    HeroComponent
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

  platinum: any[] = [];
  gold: any[] = [];
  silver: any[] = [];
  bronze: any[] = [];
  collaborator: any[] = [];

  ngOnInit() {

    this.platinum = this.sponsors.filter(sponsor => sponsor.tier === 'platinum');
    this.gold = this.sponsors.filter(sponsor => sponsor.tier === 'gold');
    this.silver = this.sponsors.filter(sponsor => sponsor.tier === 'silver');
    this.bronze = this.sponsors.filter(sponsor => sponsor.tier === 'bronze');
    this.collaborator = this.sponsors.filter(sponsor => sponsor.tier === 'collaborator');

  }

}
