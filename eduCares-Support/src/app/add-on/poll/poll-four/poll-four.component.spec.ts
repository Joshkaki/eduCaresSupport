import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollFourComponent } from './poll-four.component';

describe('PollFourComponent', () => {
  let component: PollFourComponent;
  let fixture: ComponentFixture<PollFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
