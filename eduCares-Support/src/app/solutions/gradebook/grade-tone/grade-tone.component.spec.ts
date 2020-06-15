import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeToneComponent } from './grade-tone.component';

describe('GradeToneComponent', () => {
  let component: GradeToneComponent;
  let fixture: ComponentFixture<GradeToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
