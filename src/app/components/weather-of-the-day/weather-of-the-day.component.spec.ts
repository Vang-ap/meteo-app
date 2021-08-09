import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOfTheDayComponent } from './weather-of-the-day.component';

describe('WeatherOfTheDayComponent', () => {
  let component: WeatherOfTheDayComponent;
  let fixture: ComponentFixture<WeatherOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
