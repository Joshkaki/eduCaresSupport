import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSixComponent } from './fee-six.component';

describe('FeeSixComponent', () => {
  let component: FeeSixComponent;
  let fixture: ComponentFixture<FeeSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
