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
  next(): void {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Loop back to the first slide if it's the last slide
    }
  }

  // Go to the previous slide
  prev(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.totalSlides - 1; // Loop back to the last slide if it's the first slide
    }
  }


}
