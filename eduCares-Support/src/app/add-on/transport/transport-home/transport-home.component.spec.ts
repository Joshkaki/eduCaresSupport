import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportHomeComponent } from './transport-home.component';

describe('TransportHomeComponent', () => {
  let component: TransportHomeComponent;
  let fixture: ComponentFixture<TransportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
