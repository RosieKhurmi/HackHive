import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ThemeComponent } from "./theme/theme.component";
import { SponsorsComponent } from "./sponsors/sponsors.component";
import { RegisterComponent } from "./register/register.component";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, MenuComponent, SponsorsComponent, RegisterComponent, RouterOutlet, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hackathon';
}
