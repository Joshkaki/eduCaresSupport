import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportNinetComponent } from './transport-ninet.component';

describe('TransportNinetComponent', () => {
  let component: TransportNinetComponent;
  let fixture: ComponentFixture<TransportNinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportNinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportNinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
