import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

  menuItems = [
    {
      label: 'Home',
      routeLink: '/'
    },
    {
      label: 'Theme',
      routeLink: '/theme'
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

}
