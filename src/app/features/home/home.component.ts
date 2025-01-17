import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MenuComponent } from '../../core/menu/menu.component';
import { FooterComponent } from "../../core/footer/footer.component";
import { ButtonComponent } from "../../core/button/button.component";
import { ContactComponent } from "../../shared/contact/contact.component";
import { ChallengesComponent } from '../../shared/challenges/challenges.component';
import { ItineraryComponent } from '../../itinerary/itinerary.component';
import computerMan from '../../../assets/icons/undraw_firmware_3fxd.svg';

@Component({
  selector: 'app-home',
  imports: [
    MenuComponent,
    FooterComponent,
    ButtonComponent,
    ChallengesComponent, 
    ContactComponent,
    ItineraryComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None // ! This is necessary to apply styles to the dynamic SVGs
})
export class HomeComponent  implements OnInit, OnDestroy{
  computerMan;
  timeLeft: { days: number; hours: number; minutes: number; seconds: number } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  private intervalId!: ReturnType<typeof setInterval>; // TypeScript ensures this is a proper interval ID
  private targetDate: Date = new Date('2025-02-07T00:00:00'); // Set the target date

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.computerMan = this.sanitizer.bypassSecurityTrustHtml(computerMan);
  }

  ngOnInit() {
    this.startCountdown();
  }
  ngOnDestroy(): void {
    this.clearCountdown();
  }

  private startCountdown(): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = this.targetDate.getTime() - now;

      if (timeLeft <= 0) {
        this.clearCountdown();
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return;
      }

      this.timeLeft.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.timeLeft.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.timeLeft.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.timeLeft.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    }, 1000);
  }

  private clearCountdown(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nav(path: string): void {
    this.router.navigate([path]);
  }

}
