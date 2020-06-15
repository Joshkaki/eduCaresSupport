import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapalleteTwoComponent } from './datapallete-two.component';

describe('DatapalleteTwoComponent', () => {
  let component: DatapalleteTwoComponent;
  let fixture: ComponentFixture<DatapalleteTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapalleteTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapalleteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
