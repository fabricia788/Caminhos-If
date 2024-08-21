import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSimuladoComponent } from './pagina-simulado.component';

describe('PaginaSimuladoComponent', () => {
  let component: PaginaSimuladoComponent;
  let fixture: ComponentFixture<PaginaSimuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSimuladoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSimuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
