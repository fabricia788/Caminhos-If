import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaQuemSomosComponent } from './pagina-quem-somos.component';

describe('PaginaQuemSomosComponent', () => {
  let component: PaginaQuemSomosComponent;
  let fixture: ComponentFixture<PaginaQuemSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaQuemSomosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaQuemSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
