import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { WeatherDay } from 'src/models/weather-day';

import { WeatherApiService } from './weather-api.service';

describe('WeatherApiService', () => {
  let service: WeatherApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: WeatherApiService,
          useClass: WeatherApiService
        }
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(WeatherApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call set city name', () => {
    const cityName = 'ville test';

    spyOn(service, 'setCityName');

    service.setCityName(cityName);

    expect(service.setCityName).toHaveBeenCalledWith(cityName);
  });

  it('should call weather city', () => {
    service.setCityName('Test Paris');

    service.getWeatherCity().subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/meteo/today`);
    expect(req.request.method).toBe('POST');

    req.flush({});
  });

  it('should call weather week', () => {
    const weatherDayResponse = {
      forecast: {
        forecastday: [
          {
            date: '20',
            day: {
              maxtemp_c: 20,
              mintemp_c: 11,
              condition: {
                text: 'nuageux test',
                icon: 'img',
                code: 1230,
              }
            },
            uv: 3,
          },
          {
            date: '20',
            day: {
              maxtemp_c: 23,
              mintemp_c: 15,
              condition: {
                text: 'soleil test',
                icon: 'img',
                code: 1231,
              }
            },
            uv: 5,
          },
          {
            date: '20',
            day: {
              maxtemp_c: 18,
              mintemp_c: 10,
              condition: {
                text: 'nuageux et pluis test',
                icon: 'img',
                code: 1232,
              }
            },
            uv: 1,
          },
        ]
      }
    };
    service.setCityName('Test Paris');

    service.getWeatherWeek().subscribe(response => {
      const expected = weatherDayResponse.forecast.forecastday as WeatherDay[];
      return expect(response).toBe(expected);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/meteo/week`);
    expect(req.request.method).toBe('POST');
    req.flush(weatherDayResponse);
  });
});
