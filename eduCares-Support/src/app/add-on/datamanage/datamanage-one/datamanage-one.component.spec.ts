import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanageOneComponent } from './datamanage-one.component';

describe('DatamanageOneComponent', () => {
  let component: DatamanageOneComponent;
  let fixture: ComponentFixture<DatamanageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamanageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamanageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
