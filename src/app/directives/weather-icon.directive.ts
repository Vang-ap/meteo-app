import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Condition } from 'src/models/condition';

@Directive({
  selector: '[appWeatherIcon]'
})
export class WeatherIconDirective {
  @Input('appWeatherIcon') condition!: Condition;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    if (this.condition) {
      this.elementRef.nativeElement.setAttribute('src', this.condition.icon);
      this.elementRef.nativeElement.setAttribute('alt', this.condition.text);
    }
  }

}
