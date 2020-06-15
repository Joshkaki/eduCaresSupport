import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTwoComponent } from './transport-two.component';

describe('TransportTwoComponent', () => {
  let component: TransportTwoComponent;
  let fixture: ComponentFixture<TransportTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
