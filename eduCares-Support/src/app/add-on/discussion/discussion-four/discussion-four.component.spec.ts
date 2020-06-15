import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionFourComponent } from './discussion-four.component';

describe('DiscussionFourComponent', () => {
  let component: DiscussionFourComponent;
  let fixture: ComponentFixture<DiscussionFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
