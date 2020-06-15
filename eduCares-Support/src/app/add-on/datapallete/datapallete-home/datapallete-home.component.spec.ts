import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapalleteHomeComponent } from './datapallete-home.component';

describe('DatapalleteHomeComponent', () => {
  let component: DatapalleteHomeComponent;
  let fixture: ComponentFixture<DatapalleteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapalleteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapalleteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
