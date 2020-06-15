import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFiveComponent } from './library-five.component';

describe('LibraryFiveComponent', () => {
  let component: LibraryFiveComponent;
  let fixture: ComponentFixture<LibraryFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
