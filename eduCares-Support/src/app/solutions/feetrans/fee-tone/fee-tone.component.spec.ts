import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeToneComponent } from './fee-tone.component';

describe('FeeToneComponent', () => {
  let component: FeeToneComponent;
  let fixture: ComponentFixture<FeeToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
