import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(RegisterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sends user info', () => {
    const userInfo = {
      username: 'test name',
      email: 'test@mail.com',
      password: 'test password',
      age: 30,
      city: 'test ville',
    }

    spyOn(service, 'sendsUserInfo');

    service.sendsUserInfo(userInfo);

    expect(service.sendsUserInfo).toHaveBeenCalledWith(userInfo);

  });
});
