import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanageFiveComponent } from './datamanage-five.component';

describe('DatamanageFiveComponent', () => {
  let component: DatamanageFiveComponent;
  let fixture: ComponentFixture<DatamanageFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamanageFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamanageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
