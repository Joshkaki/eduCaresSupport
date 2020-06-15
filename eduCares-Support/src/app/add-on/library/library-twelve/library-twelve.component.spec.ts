import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTwelveComponent } from './library-twelve.component';

describe('LibraryTwelveComponent', () => {
  let component: LibraryTwelveComponent;
  let fixture: ComponentFixture<LibraryTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
