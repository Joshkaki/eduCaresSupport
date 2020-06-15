import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSixtComponent } from './fee-sixt.component';

describe('FeeSixtComponent', () => {
  let component: FeeSixtComponent;
  let fixture: ComponentFixture<FeeSixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
