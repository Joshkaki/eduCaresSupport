import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportThreeoneComponent } from './transport-threeone.component';

describe('TransportThreeoneComponent', () => {
  let component: TransportThreeoneComponent;
  let fixture: ComponentFixture<TransportThreeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportThreeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportThreeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
