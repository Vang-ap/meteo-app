import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { weather, WeatherApiServiceMock } from 'src/app/tests/mocks';

import { WeatherOfTheDayComponent } from './weather-of-the-day.component';

describe('WeatherOfTheDayComponent', () => {
  let component: WeatherOfTheDayComponent;
  let fixture: ComponentFixture<WeatherOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherOfTheDayComponent],
      providers: [
        {
          provide: WeatherApiService,
          useValue: new WeatherApiServiceMock(),
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service = TestBed.inject(WeatherApiService);
    spyOn(service, 'getWeatherCity').and.returnValue(of(weather));

    expect(component).toBeTruthy();

    fixture.whenStable().then(() => {
      expect(service.getWeatherCity).toHaveBeenCalled();
      expect(component.weather).toBe(weather);
    });
  });
});
