import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeNineComponent } from './fee-nine.component';

describe('FeeNineComponent', () => {
  let component: FeeNineComponent;
  let fixture: ComponentFixture<FeeNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
