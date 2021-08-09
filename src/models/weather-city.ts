import { Main } from './main';
import { Weather } from './weather';

export interface WeatherCity {
  //id city
  id: number;
  //name city
  name: string;
  //array weather content description
  weather: Weather[];
  // object main content temprerature
  main: Main;
}
