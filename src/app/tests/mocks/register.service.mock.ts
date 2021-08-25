import { of } from 'rxjs';

export class RegisterServiceMock {
  sendsUserInfo() {
    return of(null);
  }
}
