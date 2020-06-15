import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTthreeComponent } from './grade-tthree.component';

describe('GradeTthreeComponent', () => {
  let component: GradeTthreeComponent;
  let fixture: ComponentFixture<GradeTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
