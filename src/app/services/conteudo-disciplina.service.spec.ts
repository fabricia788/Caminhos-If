import { TestBed } from '@angular/core/testing';

import { ConteudoDisciplinaService } from './conteudo-disciplina.service';

describe('ConteudoDisciplinaService', () => {
  let service: ConteudoDisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteudoDisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
