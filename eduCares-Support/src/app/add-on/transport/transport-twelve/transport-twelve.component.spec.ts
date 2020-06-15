import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTwelveComponent } from './transport-twelve.component';

describe('TransportTwelveComponent', () => {
  let component: TransportTwelveComponent;
  let fixture: ComponentFixture<TransportTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
