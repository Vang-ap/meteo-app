import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register.service';
import { MatDialogMock, MatSnackBarMock, RegisterServiceMock } from 'src/app/tests/mocks';

import { InscriptionModalComponent } from './inscription-modal.component';

describe('InscriptionModalComponent', () => {
  let component: InscriptionModalComponent;
  let fixture: ComponentFixture<InscriptionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionModalComponent],
      providers: [
        {
          provide: RegisterService,
          useValue: new RegisterServiceMock()
        },
        {
          provide: MatDialog,
          useValue: new MatDialogMock()
        },
        {
          provide: MatSnackBar,
          useValue: new MatSnackBarMock()
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.hide).toBeTruthy();
    expect(component.userInfo).toBeUndefined();
    expect(component.inscriptionForm instanceof FormGroup).toBeTruthy();
  });

  it('should call registerService and close the dialog after submit the form', () => {
    const registerService: RegisterService = TestBed.inject(RegisterService);
    spyOn(registerService, 'sendsUserInfo').and.callThrough();

    const matDialog: MatDialog = TestBed.inject(MatDialog);
    spyOn(matDialog, 'closeAll');

    component.submit();

    expect(registerService.sendsUserInfo).toHaveBeenCalled();
    expect(matDialog.closeAll).toHaveBeenCalled();
  });

  it('should send good informations to registerService', () => {
    const registerService: RegisterService = TestBed.inject(RegisterService);
    spyOn(registerService, 'sendsUserInfo').and.callThrough();

    const expectedValues = {
      username: 'test',
      email: 'test@test.com',
      password: 'testPa$$word',
      age: 35,
      city: 'Paris'
    };

    component.inscriptionForm.setValue(expectedValues);

    component.submit();

    expect(registerService.sendsUserInfo).toHaveBeenCalledWith(expectedValues);
  });

  it('should call snackBar at inscription validation', fakeAsync(() => {
    const snackBar: MatSnackBar = TestBed.inject(MatSnackBar);
    const message = 'test';

    spyOn(snackBar, 'open');
    spyOn(snackBar, 'dismiss');

    component.toastValidedInscription(message);

    expect(snackBar.open).toHaveBeenCalledWith(message);
    tick(2000);
    expect(snackBar.dismiss).toHaveBeenCalled();
  }));
});
