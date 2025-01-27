import { Component, Input, TemplateRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent<T> implements OnInit {

  @Input() slides: T[] = [];
  @Input() slideTemplate!: TemplateRef<any>;
  currentSlide: number = 0;
  leftMax: boolean = false;
  rightMax: boolean = false;

  ngOnInit() {
    this.maxLimits();
  }

  getCurrentSlide(): any {
    return this.slides[this.currentSlide];
  }

  maxLimits(): void {

    this.leftMax = this.currentSlide === 0;
    this.rightMax = this.currentSlide === this.slides.length - 1;

  }

  next(): void {

    if (!this.rightMax) {
      this.currentSlide += 1;
      this.maxLimits();
    }
    
  }

  prev(): void {
    
    if (!this.leftMax) {
      this.currentSlide -= 1;
      this.maxLimits();
    }

  }


}
