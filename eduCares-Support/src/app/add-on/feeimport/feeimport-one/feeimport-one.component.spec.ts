import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeimportOneComponent } from './feeimport-one.component';

describe('FeeimportOneComponent', () => {
  let component: FeeimportOneComponent;
  let fixture: ComponentFixture<FeeimportOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeimportOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeimportOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
