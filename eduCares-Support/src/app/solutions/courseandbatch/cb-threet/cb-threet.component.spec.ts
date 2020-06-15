import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbThreetComponent } from './cb-threet.component';

describe('CbThreetComponent', () => {
  let component: CbThreetComponent;
  let fixture: ComponentFixture<CbThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
