import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNineComponent } from './library-nine.component';

describe('LibraryNineComponent', () => {
  let component: LibraryNineComponent;
  let fixture: ComponentFixture<LibraryNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
