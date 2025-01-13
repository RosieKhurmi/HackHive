import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { MenuComponent } from '../../core/menu/menu.component';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MenuComponent
  ],
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent {
  sponsors = {
    partners: [
      { name: 'Microsoft', logo: 'assets/logos/microsoft_logo.png' },
      { name: 'Google', logo: 'assets/logos/google_logo.png' },
    ],
    platinum: [
      { name: 'Kyndryl', logo: 'assets/logos/Kyndryl_Logo.jpg' },
      { name: 'Dayforce', logo: 'assets/logos/dayforce_logo.png' },
    ],
    gold: [],
    silver: [
      { name: 'Science Council', logo: 'assets/logos/science_council_logo.jpeg' },
    ],
    bronze: [
      { name: 'Brilliant Catalyst', logo: 'assets/logos/brilliant_catalyst_logo.png' },
    ],
  };
}
