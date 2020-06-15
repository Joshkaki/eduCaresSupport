import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportEighttComponent } from './transport-eightt.component';

describe('TransportEighttComponent', () => {
  let component: TransportEighttComponent;
  let fixture: ComponentFixture<TransportEighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportEighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportEighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
