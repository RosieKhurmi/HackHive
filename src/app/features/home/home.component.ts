import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuComponent } from '../../core/menu/menu.component';
import { FooterComponent } from "../../core/footer/footer.component"; 
import computerMan from '../../../assets/icons/undraw_firmware_3fxd.svg';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None // ! This is necessary to apply styles to the dynamic SVGs
})
export class HomeComponent {
  computerMan;

  constructor(private sanitizer: DomSanitizer) {
    this.computerMan = this.sanitizer.bypassSecurityTrustHtml(computerMan);
  }
}
