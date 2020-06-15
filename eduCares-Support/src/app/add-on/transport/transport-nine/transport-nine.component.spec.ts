import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportNineComponent } from './transport-nine.component';

describe('TransportNineComponent', () => {
  let component: TransportNineComponent;
  let fixture: ComponentFixture<TransportNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
