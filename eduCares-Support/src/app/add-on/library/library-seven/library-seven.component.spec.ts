import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySevenComponent } from './library-seven.component';

describe('LibrarySevenComponent', () => {
  let component: LibrarySevenComponent;
  let fixture: ComponentFixture<LibrarySevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
