//import angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherIconDirective } from './directives/weather-icon.directive';

//import angular material
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

// import Component
import { AppComponent } from './app.component';
import { WeatherOfTheDayComponent } from './components/weather-of-the-day/weather-of-the-day.component';
import { WeatherOfTheWeekComponent } from './components/weather-of-the-week/weather-of-the-week.component';
import { WeatherOfTheWeekItemComponent } from './components/weather-of-the-week-item/weather-of-the-week-item.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { InscriptionModalComponent } from './components/inscription-modal/inscription-modal.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';

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
    InscriptionModalComponent,
    HomePageComponent,
    LoginModalComponent,
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
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
