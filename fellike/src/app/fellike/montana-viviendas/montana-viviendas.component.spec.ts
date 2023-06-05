import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontanaViviendasComponent } from './montana-viviendas.component';

describe('MontanaViviendasComponent', () => {
  let component: MontanaViviendasComponent;
  let fixture: ComponentFixture<MontanaViviendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontanaViviendasComponent]
    });
    fixture = TestBed.createComponent(MontanaViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
