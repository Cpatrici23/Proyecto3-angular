import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaDetalleComponent } from './vivienda-detalle.component';

describe('ViviendaDetalleComponent', () => {
  let component: ViviendaDetalleComponent;
  let fixture: ComponentFixture<ViviendaDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViviendaDetalleComponent]
    });
    fixture = TestBed.createComponent(ViviendaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
