import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { WeatherApiServiceMock, weatherDays } from 'src/app/tests/mocks';

import { WeatherOfTheWeekComponent } from './weather-of-the-week.component';

describe('WeatherOfTheWeekComponent', () => {
  let component: WeatherOfTheWeekComponent;
  let fixture: ComponentFixture<WeatherOfTheWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherOfTheWeekComponent],
      providers: [
        {
          provide: WeatherApiService,
          useValue: new WeatherApiServiceMock(),
        }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service = TestBed.inject(WeatherApiService);
    spyOn(service, 'getWeatherWeek').and.returnValue(of(weatherDays));

    expect(component).toBeTruthy();

    fixture.whenStable().then(() => {
      expect(service.getWeatherWeek).toHaveBeenCalled();
      expect(component.weatherDays).toBe(weatherDays);
    });
  });
});
