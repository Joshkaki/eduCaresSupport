import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThirtyfourComponent } from './fee-thirtyfour.component';

describe('FeeThirtyfourComponent', () => {
  let component: FeeThirtyfourComponent;
  let fixture: ComponentFixture<FeeThirtyfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThirtyfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThirtyfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
