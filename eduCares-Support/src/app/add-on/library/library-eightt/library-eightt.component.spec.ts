import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryEighttComponent } from './library-eightt.component';

describe('LibraryEighttComponent', () => {
  let component: LibraryEighttComponent;
  let fixture: ComponentFixture<LibraryEighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryEighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryEighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
