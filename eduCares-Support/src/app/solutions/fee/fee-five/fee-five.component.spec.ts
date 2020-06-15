import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeFiveComponent } from './fee-five.component';

describe('FeeFiveComponent', () => {
  let component: FeeFiveComponent;
  let fixture: ComponentFixture<FeeFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
