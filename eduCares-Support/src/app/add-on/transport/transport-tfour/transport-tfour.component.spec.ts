import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTfourComponent } from './transport-tfour.component';

describe('TransportTfourComponent', () => {
  let component: TransportTfourComponent;
  let fixture: ComponentFixture<TransportTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
