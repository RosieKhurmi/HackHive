import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import linkedin from '../../../assets/icons/linkedin.svg';
import instagram from '../../../assets/icons/instagram.svg';
import x from '../../../assets/icons/x.svg';
import email from '../../../assets/icons/email.svg';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  standalone: true,
  styleUrl: './menu.component.css',
  encapsulation: ViewEncapsulation.None, // ! This is necessary to apply styles to the dynamic SVGs
})

export class MenuComponent {
  menuItems = [
    {
      label: 'Home',
      routeLink: '/'
    },
    {
      label: 'About',
      routeLink: '/about'
    },
    {
      label: 'Sponsors',
      routeLink: '/sponsors'
    },
    {
      label: 'Register',
      routeLink: '/register'
    }
  ];

  linkedin;
  instagram;
  x;
  email;

  constructor(private sanitizer: DomSanitizer) {
    // SVGs are dynamically loaded and Angular's security
    // would otherwise block them as potentially unsafe content
    this.linkedin = this.sanitizer.bypassSecurityTrustHtml(linkedin);
    this.instagram = this.sanitizer.bypassSecurityTrustHtml(instagram);
    this.x = this.sanitizer.bypassSecurityTrustHtml(x);
    this.email = this.sanitizer.bypassSecurityTrustHtml(email);
  }
}
