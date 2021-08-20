import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { InscriptionModalComponent } from '../inscription-modal/inscription-modal.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userIsLogged = false;

  constructor(
    private dialog: MatDialog,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.userIsLogged = this.loginService.isUserLogged();

    this.loginService.userLoggedEvent.subscribe(status => {
      this.userIsLogged = status;
    });
  }

  openDialog() {
    this.dialog.open(InscriptionModalComponent);
  }

  openModalLogin() {
    this.dialog.open(LoginModalComponent);
  }

  logout() {
    this.loginService.logout();
  }
}

