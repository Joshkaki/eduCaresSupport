import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThirtytwoComponent } from './fee-thirtytwo.component';

describe('FeeThirtytwoComponent', () => {
  let component: FeeThirtytwoComponent;
  let fixture: ComponentFixture<FeeThirtytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThirtytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThirtytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
