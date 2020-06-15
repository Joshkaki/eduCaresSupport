import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThirtyfiveComponent } from './fee-thirtyfive.component';

describe('FeeThirtyfiveComponent', () => {
  let component: FeeThirtyfiveComponent;
  let fixture: ComponentFixture<FeeThirtyfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThirtyfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThirtyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
