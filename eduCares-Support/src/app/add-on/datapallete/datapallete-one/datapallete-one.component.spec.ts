import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapalleteOneComponent } from './datapallete-one.component';

describe('DatapalleteOneComponent', () => {
  let component: DatapalleteOneComponent;
  let fixture: ComponentFixture<DatapalleteOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapalleteOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapalleteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
