import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryElevenComponent } from './library-eleven.component';

describe('LibraryElevenComponent', () => {
  let component: LibraryElevenComponent;
  let fixture: ComponentFixture<LibraryElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
