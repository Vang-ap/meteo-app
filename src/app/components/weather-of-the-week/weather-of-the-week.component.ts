import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { WeatherDay } from 'src/models/weather-day';

@Component({
  selector: 'app-weather-of-the-week',
  templateUrl: './weather-of-the-week.component.html',
  styleUrls: ['./weather-of-the-week.component.scss']
})
export class WeatherOfTheWeekComponent implements OnInit {
  weatherDays!: WeatherDay[];

  constructor(
    private weatherApiService: WeatherApiService
  ) { }

  ngOnInit(): void {
    this.weatherApiService.getWeatherWeek().subscribe((response: WeatherDay[]) => {
      this.weatherDays = response;
    });
  }

}
