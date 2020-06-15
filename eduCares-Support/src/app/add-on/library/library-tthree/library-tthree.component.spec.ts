import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTthreeComponent } from './library-tthree.component';

describe('LibraryTthreeComponent', () => {
  let component: LibraryTthreeComponent;
  let fixture: ComponentFixture<LibraryTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
