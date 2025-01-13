import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(private router: Router) {}

  register(path: string): void {
    this.router.navigate([path]);
  }

}
