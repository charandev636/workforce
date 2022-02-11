import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BookOrderComponent } from './book-order/book-order.component';
import { HomeComponent } from './home/home.component';
import { IntroSlidesComponent } from './intro-slides/intro-slides.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'Intro-sliders',
    redirectTo: 'Intro-sliders',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component:LoginComponent
  },
  {
    path: 'Signup',
    component:SignupComponent
  },
  {
    path: 'Intro-sliders',
    component:IntroSlidesComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'bookorder',
    component:BookOrderComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
