import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { WeatherCity } from 'src/models/weather-city';

@Directive({
  selector: '[appWeatherIcon]'
})
export class WeatherIconDirective {
  @Input('appWeatherIcon') weather!: WeatherCity

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    if (this.weather) {
      this.elementRef.nativeElement.setAttribute('src', this.weather.current.condition.icon);
      this.elementRef.nativeElement.setAttribute('alt', this.weather.location.name);
    }
  }

}
