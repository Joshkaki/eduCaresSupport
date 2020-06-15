import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsNineteenComponent } from './solutions-nineteen.component';

describe('SolutionsNineteenComponent', () => {
  let component: SolutionsNineteenComponent;
  let fixture: ComponentFixture<SolutionsNineteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsNineteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
