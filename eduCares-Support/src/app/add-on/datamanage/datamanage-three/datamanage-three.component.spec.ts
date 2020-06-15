import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanageThreeComponent } from './datamanage-three.component';

describe('DatamanageThreeComponent', () => {
  let component: DatamanageThreeComponent;
  let fixture: ComponentFixture<DatamanageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamanageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamanageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
