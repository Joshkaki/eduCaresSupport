import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsSixteenComponent } from './solutions-sixteen.component';

describe('SolutionsSixteenComponent', () => {
  let component: SolutionsSixteenComponent;
  let fixture: ComponentFixture<SolutionsSixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsSixteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
