import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanageFourComponent } from './datamanage-four.component';

describe('DatamanageFourComponent', () => {
  let component: DatamanageFourComponent;
  let fixture: ComponentFixture<DatamanageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamanageFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamanageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
