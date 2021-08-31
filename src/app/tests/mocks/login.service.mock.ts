import { of } from 'rxjs';
import { EventEmitter } from '@angular/core';

export class LoginServiceMock {
  userLoggedEvent = new EventEmitter();

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
