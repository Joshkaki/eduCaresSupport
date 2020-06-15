import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryThreetComponent } from './library-threet.component';

describe('LibraryThreetComponent', () => {
  let component: LibraryThreetComponent;
  let fixture: ComponentFixture<LibraryThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
