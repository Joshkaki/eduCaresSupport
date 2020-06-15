import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSixtComponent } from './grade-sixt.component';

describe('GradeSixtComponent', () => {
  let component: GradeSixtComponent;
  let fixture: ComponentFixture<GradeSixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeSixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
