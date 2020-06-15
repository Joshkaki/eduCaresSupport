import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSeventComponent } from './fee-sevent.component';

describe('FeeSeventComponent', () => {
  let component: FeeSeventComponent;
  let fixture: ComponentFixture<FeeSeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
