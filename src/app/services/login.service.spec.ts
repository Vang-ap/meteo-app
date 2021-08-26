import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarMock } from '../tests/mocks';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  let store: any = {};
  let mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };

  const setup = () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useValue: new MatSnackBarMock()
        },
        {
          provide: LoginService,
          useClass: LoginService
        },
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  }

  beforeAll(() => {
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    setup();
    expect(service).toBeTruthy();

    expect(service.getToken()).toBeUndefined();
  });

  it('should refresh token at start if token exist in localStorage', () => {
    const tokenTest = 'testToken';

    mockLocalStorage.setItem('token', tokenTest);

    setup();

    service.userLoggedEvent.subscribe(status => {
      expect(status).toBe(true);
    });

    expect(localStorage.getItem).toHaveBeenCalledWith('token');
    expect(service.getToken()).toBe(tokenTest);
  });

  it('should login a user', () => {
    setup();
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
      expect(localStorage.setItem).toHaveBeenCalledWith('token', tokenResponse.access_token);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/auth/login`);
    expect(req.request.method).toBe('POST');
    req.flush(tokenResponse);
  });

  it('should call snackBar at logout', fakeAsync(() => {
    setup();
    const snackBar: MatSnackBar = TestBed.inject(MatSnackBar);
    const message = 'test login valided message';

    spyOn(snackBar, 'open');
    spyOn(snackBar, 'dismiss');

    service.displayMessageAtLogout(message);

    expect(snackBar.open).toHaveBeenCalledWith(message);
    tick(2000);
    expect(snackBar.dismiss).toHaveBeenCalled();
  }));

  it('should call logout', () => {
    setup();
    spyOn(service, 'displayMessageAtLogout');

    service.userLoggedEvent.subscribe(status => {
      expect(status).toBeFalse();
    });

    service.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(service.displayMessageAtLogout).toHaveBeenCalledWith('Vous êtes déconecté');
  });
});
