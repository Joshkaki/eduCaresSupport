import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrepFourComponent } from './custrep-four.component';

describe('CustrepFourComponent', () => {
  let component: CustrepFourComponent;
  let fixture: ComponentFixture<CustrepFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrepFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
