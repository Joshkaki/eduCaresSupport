import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionOneComponent } from './discussion-one.component';

describe('DiscussionOneComponent', () => {
  let component: DiscussionOneComponent;
  let fixture: ComponentFixture<DiscussionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
