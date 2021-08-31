import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { LoginServiceMock, MatDialogMock } from 'src/app/tests/mocks';
import { InscriptionModalComponent } from '../inscription-modal/inscription-modal.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, InscriptionModalComponent, LoginModalComponent],
      providers: [
        {
          provide: LoginService,
          useValue: new LoginServiceMock(),
        },
        {
          provide: MatDialog,
          useValue: new MatDialogMock(),
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service = TestBed.inject(LoginService);
    spyOn(service, 'isUserLogged');

    expect(component).toBeTruthy();
    expect(component.userIsLogged).toBeFalsy();

    fixture.whenStable().then(() => {
      expect(service.isUserLogged).toHaveBeenCalled();
    });
  });

  it('should react to userLoggedEvent emitter', fakeAsync(() => {
    const service = TestBed.inject(LoginService);
    service.userLoggedEvent.emit(true);

    tick(300);

    expect(component.userIsLogged).toBeTruthy();
  }));

  it('should open inscription modal', () => {
    const matDialog = TestBed.inject(MatDialog);

    spyOn(matDialog, 'open');

    component.openDialog();

    expect(matDialog.open).toHaveBeenCalledWith(InscriptionModalComponent);
  });

  it('should open login modal', () => {
    const matDialog = TestBed.inject(MatDialog);

    spyOn(matDialog, 'open');

    component.openModalLogin();

    expect(matDialog.open).toHaveBeenCalledWith(LoginModalComponent);
  });

  it('should logout', () => {
    const service = TestBed.inject(LoginService);

    spyOn(service, 'logout');

    component.logout();

    expect(service.logout).toHaveBeenCalled();
  });
});
