import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFourtComponent } from './transport-fourt.component';

describe('TransportFourtComponent', () => {
  let component: TransportFourtComponent;
  let fixture: ComponentFixture<TransportFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
