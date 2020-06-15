import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollThreeComponent } from './poll-three.component';

describe('PollThreeComponent', () => {
  let component: PollThreeComponent;
  let fixture: ComponentFixture<PollThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
