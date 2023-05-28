import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayaComponent } from './playa.component';

describe('PlayaComponent', () => {
  let component: PlayaComponent;
  let fixture: ComponentFixture<PlayaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayaComponent]
    });
    fixture = TestBed.createComponent(PlayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
