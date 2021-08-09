import { Condition } from './condition';

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  condition: Condition;
}
