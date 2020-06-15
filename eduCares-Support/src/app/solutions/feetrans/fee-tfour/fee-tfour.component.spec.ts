import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTfourComponent } from './fee-tfour.component';

describe('FeeTfourComponent', () => {
  let component: FeeTfourComponent;
  let fixture: ComponentFixture<FeeTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
