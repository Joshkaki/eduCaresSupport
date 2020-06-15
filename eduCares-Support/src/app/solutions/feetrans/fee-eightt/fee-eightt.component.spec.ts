import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeEighttComponent } from './fee-eightt.component';

describe('FeeEighttComponent', () => {
  let component: FeeEighttComponent;
  let fixture: ComponentFixture<FeeEighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeEighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeEighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
