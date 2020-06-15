import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTtwoComponent } from './fee-ttwo.component';

describe('FeeTtwoComponent', () => {
  let component: FeeTtwoComponent;
  let fixture: ComponentFixture<FeeTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
