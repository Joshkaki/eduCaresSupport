import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThirtysixComponent } from './fee-thirtysix.component';

describe('FeeThirtysixComponent', () => {
  let component: FeeThirtysixComponent;
  let fixture: ComponentFixture<FeeThirtysixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThirtysixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThirtysixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
