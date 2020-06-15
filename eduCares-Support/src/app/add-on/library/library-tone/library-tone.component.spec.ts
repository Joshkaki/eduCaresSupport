import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryToneComponent } from './library-tone.component';

describe('LibraryToneComponent', () => {
  let component: LibraryToneComponent;
  let fixture: ComponentFixture<LibraryToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
