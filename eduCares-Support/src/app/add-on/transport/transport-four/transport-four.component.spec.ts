import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFourComponent } from './transport-four.component';

describe('TransportFourComponent', () => {
  let component: TransportFourComponent;
  let fixture: ComponentFixture<TransportFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
