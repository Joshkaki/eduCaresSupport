import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportThreetComponent } from './transport-threet.component';

describe('TransportThreetComponent', () => {
  let component: TransportThreetComponent;
  let fixture: ComponentFixture<TransportThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
