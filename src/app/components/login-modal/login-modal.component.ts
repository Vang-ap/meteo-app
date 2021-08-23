import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/models/login';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  hide = true;
  userInfosLogin = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  })


  constructor(
    private loginService: LoginService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  submitLogin() {
    console.log(this.userInfosLogin);

    return this.loginService
      .loginOfUser(this.userInfosLogin.value)
      .subscribe(() => {
        this.dialog.closeAll();
      })
  }

  openToast(message: string) {
    this._snackBar.open(message);
    setTimeout(
      () => {
        this._snackBar.dismiss();
      }, 2000
    );
  }

}
