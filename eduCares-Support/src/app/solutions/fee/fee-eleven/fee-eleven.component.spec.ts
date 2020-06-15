import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeElevenComponent } from './fee-eleven.component';

describe('FeeElevenComponent', () => {
  let component: FeeElevenComponent;
  let fixture: ComponentFixture<FeeElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
