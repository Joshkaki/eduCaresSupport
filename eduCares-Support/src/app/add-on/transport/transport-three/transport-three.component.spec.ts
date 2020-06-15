import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportThreeComponent } from './transport-three.component';

describe('TransportThreeComponent', () => {
  let component: TransportThreeComponent;
  let fixture: ComponentFixture<TransportThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
