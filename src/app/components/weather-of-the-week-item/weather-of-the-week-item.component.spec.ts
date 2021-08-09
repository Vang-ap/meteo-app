import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOfTheWeekItemComponent } from './weather-of-the-week-item.component';

describe('WeatherOfTheWeekItemComponent', () => {
  let component: WeatherOfTheWeekItemComponent;
  let fixture: ComponentFixture<WeatherOfTheWeekItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherOfTheWeekItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOfTheWeekItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
