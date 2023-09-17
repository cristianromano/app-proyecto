import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroPage } from './registro/registro.page';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroPage,
  },
  {
    path: 'splash',
    component: SplashScreenComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
