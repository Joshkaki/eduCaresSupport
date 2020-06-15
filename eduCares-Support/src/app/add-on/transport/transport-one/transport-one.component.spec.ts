import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOneComponent } from './transport-one.component';

describe('TransportOneComponent', () => {
  let component: TransportOneComponent;
  let fixture: ComponentFixture<TransportOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
