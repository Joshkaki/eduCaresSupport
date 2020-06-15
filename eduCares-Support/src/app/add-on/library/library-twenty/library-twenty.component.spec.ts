import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTwentyComponent } from './library-twenty.component';

describe('LibraryTwentyComponent', () => {
  let component: LibraryTwentyComponent;
  let fixture: ComponentFixture<LibraryTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
