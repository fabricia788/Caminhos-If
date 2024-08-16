import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPlanosEstudoComponent } from './pagina-planos-estudo.component';

describe('PaginaPlanosEstudoComponent', () => {
  let component: PaginaPlanosEstudoComponent;
  let fixture: ComponentFixture<PaginaPlanosEstudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPlanosEstudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPlanosEstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
