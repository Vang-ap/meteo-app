import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarMock } from '../tests/mocks';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useValue: new MatSnackBarMock()
        },
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

    // @TODO : find a way to reset the service at each time
    // expect(service.getToken()).toBeUndefined();
  });

  it('should login a user', () => {
    const userInfoLogin = {
      email: 'test@test.com',
      password: 'test3210',
    };

    const tokenResponse = {
      access_token: 'testToken',
    };

    service.userLoggedEvent.subscribe(isLogged => {
      expect(isLogged).toBeTrue();
    });

    service.loginOfUser(userInfoLogin).subscribe(response => {
      expect(service.getToken()).toEqual(tokenResponse.access_token);
      expect(service.isUserLogged()).toBeTruthy();
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/auth/login`);
    expect(req.request.method).toBe('POST');
    req.flush(tokenResponse);
  });
});
