import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeThreetComponent } from './grade-threet.component';

describe('GradeThreetComponent', () => {
  let component: GradeThreetComponent;
  let fixture: ComponentFixture<GradeThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
