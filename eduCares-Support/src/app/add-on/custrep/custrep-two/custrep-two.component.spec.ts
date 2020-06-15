import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrepTwoComponent } from './custrep-two.component';

describe('CustrepTwoComponent', () => {
  let component: CustrepTwoComponent;
  let fixture: ComponentFixture<CustrepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
