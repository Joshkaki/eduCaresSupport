import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsElevenComponent } from './solutions-eleven.component';

describe('SolutionsElevenComponent', () => {
  let component: SolutionsElevenComponent;
  let fixture: ComponentFixture<SolutionsElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
