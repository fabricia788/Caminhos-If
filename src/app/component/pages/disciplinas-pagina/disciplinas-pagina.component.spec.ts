import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasPaginaComponent } from './disciplinas-pagina.component';

describe('DisciplinasPaginaComponent', () => {
  let component: DisciplinasPaginaComponent;
  let fixture: ComponentFixture<DisciplinasPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinasPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinasPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
