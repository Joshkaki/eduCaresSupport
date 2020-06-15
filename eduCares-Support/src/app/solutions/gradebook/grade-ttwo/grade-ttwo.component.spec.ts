import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTtwoComponent } from './grade-ttwo.component';

describe('GradeTtwoComponent', () => {
  let component: GradeTtwoComponent;
  let fixture: ComponentFixture<GradeTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
