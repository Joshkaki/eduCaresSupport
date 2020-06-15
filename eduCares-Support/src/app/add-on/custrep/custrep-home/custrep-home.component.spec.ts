import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrepHomeComponent } from './custrep-home.component';

describe('CustrepHomeComponent', () => {
  let component: CustrepHomeComponent;
  let fixture: ComponentFixture<CustrepHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrepHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrepHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
