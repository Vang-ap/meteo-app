import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private loginService: LoginService
  ) {

  }

  title = 'meteo-app';

  ngOnInit() {
    console.log(this.loginService.isUserLogged());
  }
}
