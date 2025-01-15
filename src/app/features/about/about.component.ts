import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuComponent } from '../../core/menu/menu.component';
import { FooterComponent } from "../../core/footer/footer.component"; 
import computerMan from '../../../assets/icons/undraw_firmware_3fxd.svg';

@Component({
  selector: 'app-about',
  imports: [MenuComponent, FooterComponent],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.css',
  encapsulation: ViewEncapsulation.None // ! This is necessary to apply styles to the dynamic SVGs
})
export class AboutComponent {
  computerMan;

  constructor(private sanitizer: DomSanitizer) {
    this.computerMan = this.sanitizer.bypassSecurityTrustHtml(computerMan);
  }
}
