import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {
    path: '',
    component: SearchFormComponent
  },
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
