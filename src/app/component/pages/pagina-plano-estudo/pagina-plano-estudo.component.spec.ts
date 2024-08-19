import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPlanoEstudoComponent } from './pagina-plano-estudo.component';

describe('PaginaPlanoEstudoComponent', () => {
  let component: PaginaPlanoEstudoComponent;
  let fixture: ComponentFixture<PaginaPlanoEstudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPlanoEstudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPlanoEstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
