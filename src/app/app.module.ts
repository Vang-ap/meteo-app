import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { WeatherOfTheDayComponent } from './components/weather-of-the-day/weather-of-the-day.component';
import { WeatherOfTheWeekComponent } from './components/weather-of-the-week/weather-of-the-week.component';
import { WeatherOfTheWeekItemComponent } from './components/weather-of-the-week-item/weather-of-the-week-item.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherIconDirective } from './directives/weather-icon.directive';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    WeatherOfTheDayComponent,
    WeatherOfTheWeekComponent,
    WeatherOfTheWeekItemComponent,
    WeatherIconDirective,
    HeaderComponent,
    WeatherComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
