import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportThirtyComponent } from './transport-thirty.component';

describe('TransportThirtyComponent', () => {
  let component: TransportThirtyComponent;
  let fixture: ComponentFixture<TransportThirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportThirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
