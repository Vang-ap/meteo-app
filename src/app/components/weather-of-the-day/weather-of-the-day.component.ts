import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { WeatherCity } from 'src/models/weather-city';

@Component({
  selector: 'app-weather-of-the-day',
  templateUrl: './weather-of-the-day.component.html',
  styleUrls: ['./weather-of-the-day.component.scss']
})
export class WeatherOfTheDayComponent implements OnInit {
  weather!: WeatherCity;

  constructor(
    private weatherApiService: WeatherApiService
  ) { }

  ngOnInit(): void {
    this.weatherApiService.getWeatherCity().subscribe((response: WeatherCity) => {
      this.weather = response;
    })
  }

}
