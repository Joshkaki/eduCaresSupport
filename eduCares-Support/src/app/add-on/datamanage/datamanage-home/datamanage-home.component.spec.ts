import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanageHomeComponent } from './datamanage-home.component';

describe('DatamanageHomeComponent', () => {
  let component: DatamanageHomeComponent;
  let fixture: ComponentFixture<DatamanageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamanageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamanageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
