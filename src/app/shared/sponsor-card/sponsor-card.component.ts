import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sponsor-card',
  imports: [],
  templateUrl: './sponsor-card.component.html',
  styleUrl: './sponsor-card.component.css'
})
export class SponsorCardComponent {

  image = input.required<{src: string; alt: string} >();

}
