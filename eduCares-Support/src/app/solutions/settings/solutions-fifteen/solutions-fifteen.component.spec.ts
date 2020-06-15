import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsFifteenComponent } from './solutions-fifteen.component';

describe('SolutionsFifteenComponent', () => {
  let component: SolutionsFifteenComponent;
  let fixture: ComponentFixture<SolutionsFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
