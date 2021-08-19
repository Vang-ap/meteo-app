import { TestBed } from '@angular/core/testing';

import { ModalConexionService } from './modal-conexion.service';

describe('ModalConexionService', () => {
  let service: ModalConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
