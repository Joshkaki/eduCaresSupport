import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSeventComponent } from './transport-sevent.component';

describe('TransportSeventComponent', () => {
  let component: TransportSeventComponent;
  let fixture: ComponentFixture<TransportSeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
