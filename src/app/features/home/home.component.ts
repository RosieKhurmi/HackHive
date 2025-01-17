import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MenuComponent } from '../../core/menu/menu.component';
import { FooterComponent } from "../../core/footer/footer.component";
import { ButtonComponent } from "../../core/button/button.component";
import { ContactComponent } from "../../shared/contact/contact.component";
import { ChallengesComponent } from '../../shared/challenges/challenges.component';
import { ItineraryComponent } from '../../itinerary/itinerary.component';
import {CountdownComponent} from '../../countdown/countdown.component';
import computerMan from '../../../assets/icons/undraw_firmware_3fxd.svg';

@Component({
  selector: 'app-home',
  imports: [
    MenuComponent,
    FooterComponent,
    ButtonComponent,
    ChallengesComponent,
    ContactComponent,
    ItineraryComponent,
    CountdownComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None // ! This is necessary to apply styles to the dynamic SVGs
})
export class HomeComponent{
  computerMan;
  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.computerMan = this.sanitizer.bypassSecurityTrustHtml(computerMan);
  }


  nav(path: string): void {
    this.router.navigate([path]);
  }

}
