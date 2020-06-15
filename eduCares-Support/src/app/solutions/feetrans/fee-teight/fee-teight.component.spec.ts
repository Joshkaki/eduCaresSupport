import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTeightComponent } from './fee-teight.component';

describe('FeeTeightComponent', () => {
  let component: FeeTeightComponent;
  let fixture: ComponentFixture<FeeTeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
