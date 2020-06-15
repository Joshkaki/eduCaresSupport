import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyOneComponent } from './tally-one.component';

describe('TallyOneComponent', () => {
  let component: TallyOneComponent;
  let fixture: ComponentFixture<TallyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
