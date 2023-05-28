import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietorioComponent } from './propietorio.component';

describe('PropietorioComponent', () => {
  let component: PropietorioComponent;
  let fixture: ComponentFixture<PropietorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropietorioComponent]
    });
    fixture = TestBed.createComponent(PropietorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
