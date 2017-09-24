import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClebardComponent } from './clebard.component';

describe('ClebardComponent', () => {
  let component: ClebardComponent;
  let fixture: ComponentFixture<ClebardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClebardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClebardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
