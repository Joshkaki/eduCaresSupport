import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTsixComponent } from './fee-tsix.component';

describe('FeeTsixComponent', () => {
  let component: FeeTsixComponent;
  let fixture: ComponentFixture<FeeTsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
