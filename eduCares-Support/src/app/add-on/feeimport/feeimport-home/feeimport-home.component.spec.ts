import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeimportHomeComponent } from './feeimport-home.component';

describe('FeeimportHomeComponent', () => {
  let component: FeeimportHomeComponent;
  let fixture: ComponentFixture<FeeimportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeimportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeimportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
