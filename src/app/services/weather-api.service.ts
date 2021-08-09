import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherCity } from 'src/models/weather-city';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getWeatherCity(): Observable<WeatherCity> {
    const endpointUrl = `${environment.apiUrl}q=Paris&appid=${environment.apiKey}`;

    return this.httpClient.get<WeatherCity>(endpointUrl);
  }
}
