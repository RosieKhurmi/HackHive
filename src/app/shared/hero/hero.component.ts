import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input() title: string = ''; 
  @Input() subtitle: string = ''; 

  @Input() text: string[] = [];

}
