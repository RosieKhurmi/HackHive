import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})

export class CountdownComponent implements OnInit, OnDestroy {

  @Input() targetDate: string = '2025-02-07T00:00:00'; 
  isHackathon: boolean = false;
  
  timeLeft: { days: number; hours: number; minutes: number; seconds: number } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  private intervalId!: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearCountdown();
  }

  private startCountdown(): void {
    const target = new Date(this.targetDate).getTime();
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = target - now;

      if (timeLeft <= 0) {
        this.clearCountdown();
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.isHackathon = true;
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
}
