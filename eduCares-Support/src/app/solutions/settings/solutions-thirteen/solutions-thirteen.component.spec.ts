import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsThirteenComponent } from './solutions-thirteen.component';

describe('SolutionsThirteenComponent', () => {
  let component: SolutionsThirteenComponent;
  let fixture: ComponentFixture<SolutionsThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
