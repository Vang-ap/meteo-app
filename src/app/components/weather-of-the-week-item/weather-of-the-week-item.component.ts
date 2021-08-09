import { Component, Input, OnInit } from '@angular/core';
import { WeatherDay } from 'src/models/weather-day';


@Component({
  selector: 'app-weather-of-the-week-item',
  templateUrl: './weather-of-the-week-item.component.html',
  styleUrls: ['./weather-of-the-week-item.component.scss']
})
export class WeatherOfTheWeekItemComponent implements OnInit {
  @Input() weatherDay!: WeatherDay;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
