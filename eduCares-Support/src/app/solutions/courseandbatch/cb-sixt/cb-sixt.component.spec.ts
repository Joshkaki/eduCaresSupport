import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbSixtComponent } from './cb-sixt.component';

describe('CbSixtComponent', () => {
  let component: CbSixtComponent;
  let fixture: ComponentFixture<CbSixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbSixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbSixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
