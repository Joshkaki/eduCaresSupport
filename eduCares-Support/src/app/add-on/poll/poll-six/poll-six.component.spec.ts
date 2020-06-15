import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollSixComponent } from './poll-six.component';

describe('PollSixComponent', () => {
  let component: PollSixComponent;
  let fixture: ComponentFixture<PollSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
