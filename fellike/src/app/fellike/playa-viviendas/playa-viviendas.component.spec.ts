import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayaViviendasComponent } from './playa-viviendas.component';

describe('PlayaViviendasComponent', () => {
  let component: PlayaViviendasComponent;
  let fixture: ComponentFixture<PlayaViviendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayaViviendasComponent]
    });
    fixture = TestBed.createComponent(PlayaViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
