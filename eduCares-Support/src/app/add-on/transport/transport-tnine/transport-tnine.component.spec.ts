import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTnineComponent } from './transport-tnine.component';

describe('TransportTnineComponent', () => {
  let component: TransportTnineComponent;
  let fixture: ComponentFixture<TransportTnineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTnineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
