import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeHomeComponent } from './fee-home.component';

describe('FeeHomeComponent', () => {
  let component: FeeHomeComponent;
  let fixture: ComponentFixture<FeeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
