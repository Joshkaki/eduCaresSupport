import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThirtyComponent } from './fee-thirty.component';

describe('FeeThirtyComponent', () => {
  let component: FeeThirtyComponent;
  let fixture: ComponentFixture<FeeThirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
