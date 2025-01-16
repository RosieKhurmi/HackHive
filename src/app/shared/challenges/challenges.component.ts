import { Component, input } from '@angular/core';

@Component({
  selector: 'app-challenges',
  imports: [],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css'
})
export class ChallengesComponent {

  text = input.required<{
    challenge: string;
    name: string;
    description: string;
    example: string;
  }>();

}
