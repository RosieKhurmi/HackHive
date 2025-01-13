import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { SponsorsComponent } from './features/sponsors/sponsors.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }, 
    {
      path: 'about',
      component: AboutComponent
    }, 
    {
        path: 'sponsors',
        component: SponsorsComponent
    }, 
    {
        path: 'register',
        component: RegisterComponent
    }, 
    { 
        path: '**', 
        redirectTo: '' 
    }
  ]