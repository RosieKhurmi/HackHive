import { Component, input, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsor-card',
  imports: [
    CommonModule
  ],
  templateUrl: './sponsor-card.component.html',
  styleUrl: './sponsor-card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SponsorCardComponent {

  image = input.required<{src: string; alt: string} >();
  tier = input.required<string>();
  url = input.required<string>();
  @Input() description: string = "";

}
