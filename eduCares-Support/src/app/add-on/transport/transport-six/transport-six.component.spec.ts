import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSixComponent } from './transport-six.component';

describe('TransportSixComponent', () => {
  let component: TransportSixComponent;
  let fixture: ComponentFixture<TransportSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
