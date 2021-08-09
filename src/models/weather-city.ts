import { Current } from './current';
import { Location } from './location';

export interface WeatherCity {
  location: Location;
  current: Current;
}
