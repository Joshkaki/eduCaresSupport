import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSevenComponent } from './news-seven.component';

describe('NewsSevenComponent', () => {
  let component: NewsSevenComponent;
  let fixture: ComponentFixture<NewsSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
