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

export const weatherDays = [
  {
    date: '4',
    day: {
      maxtemp_c: 20,
      mintemp_c: 12,
      condition: {
        text: 'nuageux',
        icon: 'img',
        code: 1231,
      },
    },
    uv: 2,
  },
  {
    date: '5',
    day: {
      maxtemp_c: 25,
      mintemp_c: 18,
      condition: {
        text: 'soleil',
        icon: 'img',
        code: 1232,
      },
    },
    uv: 5,
  },
  {
    date: '6',
    day: {
      maxtemp_c: 19,
      mintemp_c: 10,
      condition: {
        text: 'nuageux et pluie',
        icon: 'img',
        code: 1233,
      },
    },
    uv: 1,
  },

]

export class WeatherApiServiceMock {
  setCityName() {
    return 'city name'
  }

  getWeatherCity() {
    return of(weather)
  }

  getWeatherWeek() {
    return of(weatherDays)
  }

}
