import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrepFiveComponent } from './custrep-five.component';

describe('CustrepFiveComponent', () => {
  let component: CustrepFiveComponent;
  let fixture: ComponentFixture<CustrepFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrepFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
