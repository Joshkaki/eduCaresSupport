import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFiveComponent } from './transport-five.component';

describe('TransportFiveComponent', () => {
  let component: TransportFiveComponent;
  let fixture: ComponentFixture<TransportFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
