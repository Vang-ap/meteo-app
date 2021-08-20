import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherCity } from 'src/models/weather-city';
import { WeatherDay } from 'src/models/weather-day';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private cityName = '';

  constructor(
    private httpClient: HttpClient,
  ) { }

  setCityName(cityName: string) {
    this.cityName = cityName;
  }

  getWeatherCity(): Observable<WeatherCity> {
    const endpointUrl = `${environment.apiUrl}/meteo/today`;
    const body = { cityName: this.cityName };

    return this.httpClient.post<WeatherCity>(endpointUrl, body);
  }

  getWeatherWeek(): Observable<WeatherDay[]> {
    const endpointUrl = `${environment.apiUrl}/meteo/week`;
    const body = { cityName: this.cityName };

    return this.httpClient
      .post<{ forecast: { forecastday: WeatherDay[] } }>(endpointUrl, body)
      .pipe(
        map(response => {
          return response.forecast.forecastday;
        })
      )
      ;
  }
}
