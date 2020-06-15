import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFourComponent } from './library-four.component';

describe('LibraryFourComponent', () => {
  let component: LibraryFourComponent;
  let fixture: ComponentFixture<LibraryFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
