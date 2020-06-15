import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTtwoComponent } from './transport-ttwo.component';

describe('TransportTtwoComponent', () => {
  let component: TransportTtwoComponent;
  let fixture: ComponentFixture<TransportTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
