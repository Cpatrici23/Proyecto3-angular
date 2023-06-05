import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolViviendasComponent } from './arbol-viviendas.component';

describe('ArbolViviendasComponent', () => {
  let component: ArbolViviendasComponent;
  let fixture: ComponentFixture<ArbolViviendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbolViviendasComponent]
    });
    fixture = TestBed.createComponent(ArbolViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
