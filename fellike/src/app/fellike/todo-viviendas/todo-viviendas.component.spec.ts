import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoViviendasComponent } from './todo-viviendas.component';

describe('TodoViviendasComponent', () => {
  let component: TodoViviendasComponent;
  let fixture: ComponentFixture<TodoViviendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoViviendasComponent]
    });
    fixture = TestBed.createComponent(TodoViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
