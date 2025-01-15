import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsor-card',
  imports: [
    CommonModule
  ],
  templateUrl: './sponsor-card.component.html',
  styleUrl: './sponsor-card.component.css'
})
export class SponsorCardComponent {

  image = input.required<{src: string; alt: string} >();
  tier = input.required<string>();
  @Input() description: string = "";

}
