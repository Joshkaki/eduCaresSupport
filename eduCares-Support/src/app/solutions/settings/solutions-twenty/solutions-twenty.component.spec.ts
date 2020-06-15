import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsTwentyComponent } from './solutions-twenty.component';

describe('SolutionsTwentyComponent', () => {
  let component: SolutionsTwentyComponent;
  let fixture: ComponentFixture<SolutionsTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
