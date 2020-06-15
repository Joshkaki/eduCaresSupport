import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTsevenComponent } from './transport-tseven.component';

describe('TransportTsevenComponent', () => {
  let component: TransportTsevenComponent;
  let fixture: ComponentFixture<TransportTsevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTsevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
