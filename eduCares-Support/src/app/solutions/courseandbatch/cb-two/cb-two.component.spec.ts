import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTwoComponent } from './cb-two.component';

describe('CbTwoComponent', () => {
  let component: CbTwoComponent;
  let fixture: ComponentFixture<CbTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
