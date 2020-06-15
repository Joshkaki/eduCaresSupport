import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollSevenComponent } from './poll-seven.component';

describe('PollSevenComponent', () => {
  let component: PollSevenComponent;
  let fixture: ComponentFixture<PollSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
