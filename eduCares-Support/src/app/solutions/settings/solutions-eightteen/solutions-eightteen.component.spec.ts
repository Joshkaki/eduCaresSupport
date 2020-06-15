import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsEightteenComponent } from './solutions-eightteen.component';

describe('SolutionsEightteenComponent', () => {
  let component: SolutionsEightteenComponent;
  let fixture: ComponentFixture<SolutionsEightteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsEightteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsEightteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
