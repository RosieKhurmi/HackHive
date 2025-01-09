import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from "./features/home/home.component";
import { ThemeComponent } from "./features/theme/theme.component";
import { SponsorsComponent } from "./features/sponsors/sponsors.component";
import { RegisterComponent } from "./features/register/register.component";
import { MenuComponent } from "./core/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, MenuComponent, SponsorsComponent, RegisterComponent, RouterOutlet, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hackathon';
}
