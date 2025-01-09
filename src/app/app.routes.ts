import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ThemeComponent } from './theme/theme.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { RegisterComponent } from './register/register.component';

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