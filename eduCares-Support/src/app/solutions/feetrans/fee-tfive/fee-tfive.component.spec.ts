import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTfiveComponent } from './fee-tfive.component';

describe('FeeTfiveComponent', () => {
  let component: FeeTfiveComponent;
  let fixture: ComponentFixture<FeeTfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
