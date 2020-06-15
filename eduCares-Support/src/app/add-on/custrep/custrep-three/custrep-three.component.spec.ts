import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrepThreeComponent } from './custrep-three.component';

describe('CustrepThreeComponent', () => {
  let component: CustrepThreeComponent;
  let fixture: ComponentFixture<CustrepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
