import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodologiasPaginaComponent } from './metodologias-pagina.component';

describe('MetodologiasPaginaComponent', () => {
  let component: MetodologiasPaginaComponent;
  let fixture: ComponentFixture<MetodologiasPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodologiasPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodologiasPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
