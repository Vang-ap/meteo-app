import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchFormIsDisplayed = false;
  cityName = '';

  constructor(
    private weatherApiService: WeatherApiService,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.searchFormIsDisplayed = this.loginService.isUserLogged();
    this.loginService.userLoggedEvent.subscribe(status => {
      this.searchFormIsDisplayed = status;
    })
  }


  getWeatherByCity() {
    this.weatherApiService.setCityName(this.cityName);
    this.router.navigate(['weather', this.cityName]);
  }

}
