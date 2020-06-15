import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTthreeComponent } from './transport-tthree.component';

describe('TransportTthreeComponent', () => {
  let component: TransportTthreeComponent;
  let fixture: ComponentFixture<TransportTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
