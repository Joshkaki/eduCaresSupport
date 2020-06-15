import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTwoComponent } from './grade-two.component';

describe('GradeTwoComponent', () => {
  let component: GradeTwoComponent;
  let fixture: ComponentFixture<GradeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
