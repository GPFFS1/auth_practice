import { Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent}
];
