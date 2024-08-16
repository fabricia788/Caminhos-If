import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosEstudosPaginaComponent } from './planos-estudos-pagina.component';

describe('PlanosEstudosPaginaComponent', () => {
  let component: PlanosEstudosPaginaComponent;
  let fixture: ComponentFixture<PlanosEstudosPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanosEstudosPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanosEstudosPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
