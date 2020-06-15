import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapalleteThreeComponent } from './datapallete-three.component';

describe('DatapalleteThreeComponent', () => {
  let component: DatapalleteThreeComponent;
  let fixture: ComponentFixture<DatapalleteThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapalleteThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapalleteThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
