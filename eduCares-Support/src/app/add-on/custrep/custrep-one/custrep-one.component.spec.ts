import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrepOneComponent } from './custrep-one.component';

describe('CustrepOneComponent', () => {
  let component: CustrepOneComponent;
  let fixture: ComponentFixture<CustrepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
