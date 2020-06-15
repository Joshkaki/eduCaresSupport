import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTeightComponent } from './transport-teight.component';

describe('TransportTeightComponent', () => {
  let component: TransportTeightComponent;
  let fixture: ComponentFixture<TransportTeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
