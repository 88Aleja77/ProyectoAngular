import { TestBed } from '@angular/core/testing';

import { PedirDatosService } from './pedir-datos.service';

describe('PedirDatosService', () => {
  let service: PedirDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedirDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
