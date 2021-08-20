import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from 'src/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLoggedEvent = new EventEmitter();

  private token!: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    const token = localStorage.getItem('token');

    if (token) {
      this.token = token;
      this.userLoggedEvent.emit(true);
    }
  }

  getToken() {
    return this.token;
  }

  isUserLogged() {
    return !!this.token;
  }

  loginOfUser(userInfoLogin: Login): Observable<{ access_token: string }> {
    const endpointUrl = `${environment.apiUrl}/auth/login`;
    console.log(userInfoLogin);

    return this.httpClient
      .post<{ access_token: string }>(endpointUrl, userInfoLogin)
      .pipe(
        map(response => {
          this.token = response.access_token;
          localStorage.setItem('token', this.token);
          this.userLoggedEvent.emit(true);

          return response;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.userLoggedEvent.emit(false);
  }
}
