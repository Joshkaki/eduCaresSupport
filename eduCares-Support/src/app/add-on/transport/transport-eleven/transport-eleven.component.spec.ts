import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportElevenComponent } from './transport-eleven.component';

describe('TransportElevenComponent', () => {
  let component: TransportElevenComponent;
  let fixture: ComponentFixture<TransportElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
