import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent<T> {

  @Input() slides: T[] = [];
  @Input() slideTemplate!: TemplateRef<any>;
  currentSlide: number = 0;
  totalSlides: number = this.slides.length;

  getCurrentSlide(): any {
    return this.slides[this.currentSlide];
  }

  // Go to the next slide

  // Navigate to the next slide, wrapping around when reaching the last slide
  next(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length; // Wrap around to first slide
  }

  // Navigate to the previous slide, wrapping around to the last slide when at the first
  prev(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; // Wrap around to last slide
  }


}
