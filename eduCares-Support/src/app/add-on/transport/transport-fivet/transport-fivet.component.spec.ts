import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFivetComponent } from './transport-fivet.component';

describe('TransportFivetComponent', () => {
  let component: TransportFivetComponent;
  let fixture: ComponentFixture<TransportFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
