import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSixtComponent } from './transport-sixt.component';

describe('TransportSixtComponent', () => {
  let component: TransportSixtComponent;
  let fixture: ComponentFixture<TransportSixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
