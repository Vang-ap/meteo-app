import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/models/register';

import { InscriptionModalComponent } from './inscription-modal.component';

describe('InscriptionModalComponent', () => {
  let component: InscriptionModalComponent;
  let fixture: ComponentFixture<InscriptionModalComponent>;

  class mockRegisterService {
    sendsUserInfo() {
      return of(null);
    }
  }

  class mockMatDialog {
    closeAll() {
      return;
    }
  }

  class mockMatSnackBar {
    open(message: string) {
      return message;
    }

    dismiss() {
      return;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionModalComponent],
      providers: [
        {
          provide: RegisterService,
          useClass: mockRegisterService
        },
        {
          provide: MatDialog,
          useClass: mockMatDialog
        },
        {
          provide: MatSnackBar,
          useClass: mockMatSnackBar
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
    const registerService: RegisterService = TestBed.get(RegisterService);
    spyOn(registerService, 'sendsUserInfo').and.returnValue(of({} as Register));

    const matDialog: MatDialog = TestBed.get(MatDialog);
    spyOn(matDialog, 'closeAll');

    component.submit();

    expect(registerService.sendsUserInfo).toHaveBeenCalled();
    expect(matDialog.closeAll).toHaveBeenCalled();
  });

  it('should send good informations to registerService', () => {
    const registerService: RegisterService = TestBed.get(RegisterService);
    spyOn(registerService, 'sendsUserInfo').and.returnValue(of({} as Register));

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
    const snackBar: MatSnackBar = TestBed.get(MatSnackBar);
    const message = 'test';

    spyOn(snackBar, 'open');
    spyOn(snackBar, 'dismiss');

    component.toastValidedInscription(message);

    expect(snackBar.open).toHaveBeenCalledWith(message);
    tick(2000);
    expect(snackBar.dismiss).toHaveBeenCalled();
  }));
});
