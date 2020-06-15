import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTfiveComponent } from './transport-tfive.component';

describe('TransportTfiveComponent', () => {
  let component: TransportTfiveComponent;
  let fixture: ComponentFixture<TransportTfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
