import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollHomeComponent } from './poll-home.component';

describe('PollHomeComponent', () => {
  let component: PollHomeComponent;
  let fixture: ComponentFixture<PollHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
