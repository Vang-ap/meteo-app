import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherDayMock } from 'src/app/tests/mocks';
import { MatCardModule } from '@angular/material/card';

import { WeatherOfTheWeekItemComponent } from './weather-of-the-week-item.component';

describe('WeatherOfTheWeekItemComponent', () => {
  let component: WeatherOfTheWeekItemComponent;
  let fixture: ComponentFixture<WeatherOfTheWeekItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [WeatherOfTheWeekItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOfTheWeekItemComponent);
    component = fixture.componentInstance;
    component.weatherDay = WeatherDayMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
