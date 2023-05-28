import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontanaComponent } from './montana.component';

describe('MontanaComponent', () => {
  let component: MontanaComponent;
  let fixture: ComponentFixture<MontanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontanaComponent]
    });
    fixture = TestBed.createComponent(MontanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
