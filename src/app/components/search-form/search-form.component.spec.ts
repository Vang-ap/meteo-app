import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/services/login.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { LoginServiceMock, WeatherApiServiceMock } from 'src/app/tests/mocks';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      providers: [
        {
          provide: WeatherApiService,
          useValue: new WeatherApiServiceMock(),
        },
        {
          provide: LoginService,
          useValue: new LoginServiceMock(),
        },
        {
          provide: Router,
          useValue: mockRouter,
        }
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service = TestBed.inject(LoginService);
    spyOn(service, 'isUserLogged');

    expect(component).toBeTruthy();
    expect(component.searchFormIsDisplayed).toBeFalsy();

    expect(component.cityName).toBeDefined();

    fixture.whenStable().then(() => {
      expect(service.isUserLogged).toHaveBeenCalled();
    });
  });

  it('should get weather city', () => {
    const serviceWeatherApi = TestBed.inject(WeatherApiService);
    const router = TestBed.inject(Router);
    const cityName = 'test Ville';

    spyOn(serviceWeatherApi, 'setCityName');

    component.cityName = cityName;
    component.getWeatherByCity();

    expect(serviceWeatherApi.setCityName).toHaveBeenCalledWith(cityName);
    expect(router.navigate).toHaveBeenCalledWith(['weather', cityName]);
  });
});
