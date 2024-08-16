import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSimuladosComponent } from './pagina-simulados.component';

describe('PaginaSimuladosComponent', () => {
  let component: PaginaSimuladosComponent;
  let fixture: ComponentFixture<PaginaSimuladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSimuladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSimuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
