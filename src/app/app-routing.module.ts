import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroSlidesComponent } from './intro-slides/intro-slides.component';
import { LoginComponent } from './login/login.component';

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
    path: 'Intro-sliders',
    component:IntroSlidesComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
