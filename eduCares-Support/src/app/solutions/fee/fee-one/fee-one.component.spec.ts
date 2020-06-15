import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeOneComponent } from './fee-one.component';

describe('FeeOneComponent', () => {
  let component: FeeOneComponent;
  let fixture: ComponentFixture<FeeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
