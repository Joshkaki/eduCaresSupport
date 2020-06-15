import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportEightComponent } from './transport-eight.component';

describe('TransportEightComponent', () => {
  let component: TransportEightComponent;
  let fixture: ComponentFixture<TransportEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
