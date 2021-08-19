import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InscriptionModalComponent } from './components/inscription-modal/inscription-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },

  /*  {
      path: 'inscription',
      component: InscriptionModalComponent
    },

    {
      path: 'login',
      component: LoginModalComponent
    },
  */
  {
    path: 'weather/:cityName',
    component: WeatherComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
