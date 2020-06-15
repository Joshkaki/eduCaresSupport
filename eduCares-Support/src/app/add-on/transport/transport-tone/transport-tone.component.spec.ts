import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportToneComponent } from './transport-tone.component';

describe('TransportToneComponent', () => {
  let component: TransportToneComponent;
  let fixture: ComponentFixture<TransportToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
