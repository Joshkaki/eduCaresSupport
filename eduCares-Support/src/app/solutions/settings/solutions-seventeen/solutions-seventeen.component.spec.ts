import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsSeventeenComponent } from './solutions-seventeen.component';

describe('SolutionsSeventeenComponent', () => {
  let component: SolutionsSeventeenComponent;
  let fixture: ComponentFixture<SolutionsSeventeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsSeventeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
