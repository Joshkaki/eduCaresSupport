import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSixComponent } from './blog-six.component';

describe('BlogSixComponent', () => {
  let component: BlogSixComponent;
  let fixture: ComponentFixture<BlogSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
