import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from 'src/models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  sendsUserInfo(userInfo: Register): Observable<Register> {
    const endpointUrl = `${environment.apiUrl}/users`;

    return this.httpClient.post<Register>(endpointUrl, userInfo);
  }
}
