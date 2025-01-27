import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import linkedin from '../../../assets/icons/linkedin.svg';
import instagram from '../../../assets/icons/instagram.svg';
import x from '../../../assets/icons/x.svg';
import email from '../../../assets/icons/email.svg';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None, 
})
export class FooterComponent {

  linkedin;
  instagram;
  x;
  email;

  constructor(private sanitizer: DomSanitizer) {
    this.linkedin = this.sanitizer.bypassSecurityTrustHtml(linkedin);
    this.instagram = this.sanitizer.bypassSecurityTrustHtml(instagram);
    this.x = this.sanitizer.bypassSecurityTrustHtml(x);
    this.email = this.sanitizer.bypassSecurityTrustHtml(email);
  }

}
