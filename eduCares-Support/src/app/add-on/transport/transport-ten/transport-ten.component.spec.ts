import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTenComponent } from './transport-ten.component';

describe('TransportTenComponent', () => {
  let component: TransportTenComponent;
  let fixture: ComponentFixture<TransportTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
