import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTenComponent } from './cb-ten.component';

describe('CbTenComponent', () => {
  let component: CbTenComponent;
  let fixture: ComponentFixture<CbTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
