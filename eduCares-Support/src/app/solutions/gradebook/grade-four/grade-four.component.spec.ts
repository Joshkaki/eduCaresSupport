import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFourComponent } from './grade-four.component';

describe('GradeFourComponent', () => {
  let component: GradeFourComponent;
  let fixture: ComponentFixture<GradeFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
