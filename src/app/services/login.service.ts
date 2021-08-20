import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loginOfUser(userInfoLogin: Login): Observable<Login> {
    const endpointUrl = `${environment.apiUrl}/auth/login`;
    console.log(userInfoLogin);

    return this.httpClient.post<Login>(endpointUrl, userInfoLogin);
  }
}
