import { TestBed } from '@angular/core/testing';

import { PlanoEstudoService } from './plano-estudo.service';

describe('PlanoEstudoService', () => {
  let service: PlanoEstudoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanoEstudoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
