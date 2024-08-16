import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemSomosPaginaComponent } from './quem-somos-pagina.component';

describe('QuemSomosPaginaComponent', () => {
  let component: QuemSomosPaginaComponent;
  let fixture: ComponentFixture<QuemSomosPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuemSomosPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuemSomosPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
