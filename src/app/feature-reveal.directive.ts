import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFeatureReveal]',
})
export class FeatureRevealDirective implements OnInit {
  @Input('appFeatureReveal') targetDate!: string; // Target reveal date as input

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const now = new Date();
    const revealDate = new Date(this.targetDate);

    // Initially hide the element
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');

    if (now >= revealDate) {
      // If the current time is after the reveal time, show immediately
      this.revealFeature();
    } else {
      // Schedule the reveal for the future
      const timeUntilReveal = revealDate.getTime() - now.getTime();
      setTimeout(() => {
        this.revealFeature();
      }, timeUntilReveal);
    }
  }

  private revealFeature(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 1s ease-in-out');
  }
}
