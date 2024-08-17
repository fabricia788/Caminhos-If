import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConteudoDisciplinaComponent } from './pagina-conteudo-disciplina.component';

describe('PaginaConteudoDisciplinaComponent', () => {
  let component: PaginaConteudoDisciplinaComponent;
  let fixture: ComponentFixture<PaginaConteudoDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaConteudoDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaConteudoDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
