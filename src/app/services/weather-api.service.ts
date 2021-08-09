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

  constructor(
    private httpClient: HttpClient,
  ) { }

  getWeatherCity(): Observable<WeatherCity> {
    const endpointUrl = `${environment.apiUrl}/current.json`;
    let params: HttpParams = new HttpParams();
    params = params.set('key', environment.apiKey);
    params = params.set('q', 'paris');
    params = params.set('lang', 'fr');

    return this.httpClient.get<WeatherCity>(endpointUrl, { params });
  }

  getWeatherWeek(): Observable<WeatherDay[]> {
    const endpointUrl = `${environment.apiUrl}/forecast.json`;
    let params: HttpParams = new HttpParams();
    params = params.set('key', environment.apiKey);
    params = params.set('q', 'paris');
    params = params.set('days', '3');
    params = params.set('lang', 'fr');

    return this.httpClient
      .get<{ forecast: { forecastday: WeatherDay[] } }>(endpointUrl, { params })
      .pipe(
        map(response => {
          return response.forecast.forecastday;
        })
      )
      ;
  }
}
