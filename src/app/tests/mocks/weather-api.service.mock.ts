import { of } from 'rxjs'

export const weather = {
  location: {
    name: 'test Paris',
    region: 'test ile-de-france',
    country: 'test France',
    tz_id: 'test01',
    localtime: '123Test',
  },
  current: {
    temp_c: 20,
    condition: {
      text: 'nuageux test',
      icon: 'img',
      code: 1230,
    },
  },
};

export class WeatherApiServiceMock {
  setCityName() {
    return 'city name'
  }

  getWeatherCity() {
    return of(weather)
  }

  getWeatherWeek() {
    return of(null)
  }

}
