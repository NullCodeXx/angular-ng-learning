import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRetestComponent } from './todo-retest.component';

describe('TodoRetestComponent', () => {
  let component: TodoRetestComponent;
  let fixture: ComponentFixture<TodoRetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoRetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
