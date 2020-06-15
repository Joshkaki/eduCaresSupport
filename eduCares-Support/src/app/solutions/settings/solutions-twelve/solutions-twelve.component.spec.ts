import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsTwelveComponent } from './solutions-twelve.component';

describe('SolutionsTwelveComponent', () => {
  let component: SolutionsTwelveComponent;
  let fixture: ComponentFixture<SolutionsTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
