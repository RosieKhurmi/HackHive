import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { ThemeComponent } from './features/theme/theme.component';
import { SponsorsComponent } from './features/sponsors/sponsors.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }, 
    {
      path: 'theme',
      component: ThemeComponent
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