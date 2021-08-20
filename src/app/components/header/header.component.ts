import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionModalComponent } from '../inscription-modal/inscription-modal.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(InscriptionModalComponent);
  }

  openModalLogin() {
    this.dialog.open(LoginModalComponent);
  }
}

