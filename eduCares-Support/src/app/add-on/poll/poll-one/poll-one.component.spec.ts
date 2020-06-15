import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollOneComponent } from './poll-one.component';

describe('PollOneComponent', () => {
  let component: PollOneComponent;
  let fixture: ComponentFixture<PollOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
