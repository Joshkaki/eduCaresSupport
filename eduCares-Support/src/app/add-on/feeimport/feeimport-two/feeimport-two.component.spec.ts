import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeimportTwoComponent } from './feeimport-two.component';

describe('FeeimportTwoComponent', () => {
  let component: FeeimportTwoComponent;
  let fixture: ComponentFixture<FeeimportTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeimportTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeimportTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
