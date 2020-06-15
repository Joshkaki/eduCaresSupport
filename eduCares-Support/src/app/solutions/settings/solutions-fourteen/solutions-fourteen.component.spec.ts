import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsFourteenComponent } from './solutions-fourteen.component';

describe('SolutionsFourteenComponent', () => {
  let component: SolutionsFourteenComponent;
  let fixture: ComponentFixture<SolutionsFourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsFourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
