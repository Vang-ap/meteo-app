import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/models/register';

@Component({
  selector: 'app-inscription-modal',
  templateUrl: './inscription-modal.component.html',
  styleUrls: ['./inscription-modal.component.scss']
})
export class InscriptionModalComponent {
  hide = true;
  userInfo!: Register;
  inscriptionForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });

  constructor(
    private registerService: RegisterService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  submit() {
    return this.registerService
      .sendsUserInfo(this.inscriptionForm.value)
      .subscribe(() => {
        this.dialog.closeAll();
      });
  }

  toastValidedInscription(message: string) {
    this._snackBar.open(message);
    setTimeout(
      () => {
        this._snackBar.dismiss();
      }, 2000
    );
  }
}
