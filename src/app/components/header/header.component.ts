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
    const dialogRef = this.dialog.open(InscriptionModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openModalLogin() {
    const dialogRef = this.dialog.open(LoginModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

