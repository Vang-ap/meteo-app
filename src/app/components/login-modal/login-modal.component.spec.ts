import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { LoginServiceMock, MatDialogMock, MatSnackBarMock } from 'src/app/tests/mocks';


import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginModalComponent],
      providers: [
        {
          provide: LoginService,
          useValue: new LoginServiceMock(),
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
    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.hide).toBeTruthy();
    expect(component.userInfosLogin instanceof FormGroup).toBeTruthy();
  });

  it('should call loginService, submit the form and close the dialog', () => {
    const loginService: LoginService = TestBed.inject(LoginService);
    spyOn(loginService, 'loginOfUser').and.callThrough();

    component.submitLogin();

    const matDialog: MatDialog = TestBed.inject(MatDialog);
    spyOn(matDialog, 'closeAll');

    component.submitLogin();

    expect(loginService.loginOfUser).toHaveBeenCalled();
    expect(matDialog.closeAll).toHaveBeenCalled();
  });

  it('should display message success login', fakeAsync(() => {
    const snackBar: MatSnackBar = TestBed.inject(MatSnackBar);
    const message = 'Test login success';

    spyOn(snackBar, 'open');
    spyOn(snackBar, 'dismiss');

    component.openToast(message);

    expect(snackBar.open).toHaveBeenCalledWith(message);
    tick(2000);
    expect(snackBar.dismiss).toHaveBeenCalled();
  }));
});
