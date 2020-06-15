import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTfourComponent } from './grade-tfour.component';

describe('GradeTfourComponent', () => {
  let component: GradeTfourComponent;
  let fixture: ComponentFixture<GradeTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
