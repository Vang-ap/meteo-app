import { of } from 'rxjs'

export class WeatherApiServiceMock {
  setCityName() {
    return 'city name'
  }

  getWeatherCity() {
    return of(null)
  }

  getWeatherWeek() {
    return of(null)
  }

}
