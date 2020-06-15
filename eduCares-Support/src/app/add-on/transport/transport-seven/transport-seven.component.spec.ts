import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSevenComponent } from './transport-seven.component';

describe('TransportSevenComponent', () => {
  let component: TransportSevenComponent;
  let fixture: ComponentFixture<TransportSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
