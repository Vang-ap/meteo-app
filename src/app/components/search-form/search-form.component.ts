import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  cityName = '';

  constructor(
    private weatherApiService: WeatherApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getWeatherByCity() {
    this.weatherApiService.setCityName(this.cityName);
    this.router.navigate(['weather', this.cityName]);
  }

}
