import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _snackBar: MatSnackBar,
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

  displayMessageAtLogout(message: string) {
    this._snackBar.open(message);
    setTimeout(
      () => {
        this._snackBar.dismiss();
      }, 2000
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.userLoggedEvent.emit(false);
    this.displayMessageAtLogout('Vous êtes déconecté');
  }
}
