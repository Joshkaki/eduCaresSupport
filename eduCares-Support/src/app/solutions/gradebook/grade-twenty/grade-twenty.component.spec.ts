import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTwentyComponent } from './grade-twenty.component';

describe('GradeTwentyComponent', () => {
  let component: GradeTwentyComponent;
  let fixture: ComponentFixture<GradeTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
