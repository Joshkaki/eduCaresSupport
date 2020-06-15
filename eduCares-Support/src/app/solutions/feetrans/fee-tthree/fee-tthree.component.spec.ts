import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTthreeComponent } from './fee-tthree.component';

describe('FeeTthreeComponent', () => {
  let component: FeeTthreeComponent;
  let fixture: ComponentFixture<FeeTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
