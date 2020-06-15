import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFiveComponent } from './grade-five.component';

describe('GradeFiveComponent', () => {
  let component: GradeFiveComponent;
  let fixture: ComponentFixture<GradeFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
