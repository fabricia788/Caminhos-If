import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDisciplinaComponent } from './pagina-disciplina.component';

describe('PaginaDisciplinaComponent', () => {
  let component: PaginaDisciplinaComponent;
  let fixture: ComponentFixture<PaginaDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
