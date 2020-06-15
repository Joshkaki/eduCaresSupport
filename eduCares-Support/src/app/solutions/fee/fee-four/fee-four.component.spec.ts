import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeFourComponent } from './fee-four.component';

describe('FeeFourComponent', () => {
  let component: FeeFourComponent;
  let fixture: ComponentFixture<FeeFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
