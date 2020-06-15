import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThirtysevenComponent } from './fee-thirtyseven.component';

describe('FeeThirtysevenComponent', () => {
  let component: FeeThirtysevenComponent;
  let fixture: ComponentFixture<FeeThirtysevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThirtysevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThirtysevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
