import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTsixComponent } from './transport-tsix.component';

describe('TransportTsixComponent', () => {
  let component: TransportTsixComponent;
  let fixture: ComponentFixture<TransportTsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
