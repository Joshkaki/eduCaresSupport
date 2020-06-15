import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTwentyComponent } from './transport-twenty.component';

describe('TransportTwentyComponent', () => {
  let component: TransportTwentyComponent;
  let fixture: ComponentFixture<TransportTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
