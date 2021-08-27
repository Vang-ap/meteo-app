import { of } from 'rxjs';

export class LoginServiceMock {
  getToken() {
    return 'token';
  }

  isUserLogged() {
    return false;
  }

  loginOfUser() {
    return of(null);
  }

  displayMessageAtLogout() {
    return 'message test';
  }

  logout() {
    return;
  }
}
