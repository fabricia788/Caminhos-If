import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMetodologiasComponent } from './pagina-metodologias.component';

describe('PaginaMetodologiasComponent', () => {
  let component: PaginaMetodologiasComponent;
  let fixture: ComponentFixture<PaginaMetodologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMetodologiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMetodologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
