import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOfTheWeekComponent } from './weather-of-the-week.component';

describe('WeatherOfTheWeekComponent', () => {
  let component: WeatherOfTheWeekComponent;
  let fixture: ComponentFixture<WeatherOfTheWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherOfTheWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
