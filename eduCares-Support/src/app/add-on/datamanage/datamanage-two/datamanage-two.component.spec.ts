import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanageTwoComponent } from './datamanage-two.component';

describe('DatamanageTwoComponent', () => {
  let component: DatamanageTwoComponent;
  let fixture: ComponentFixture<DatamanageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamanageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamanageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
