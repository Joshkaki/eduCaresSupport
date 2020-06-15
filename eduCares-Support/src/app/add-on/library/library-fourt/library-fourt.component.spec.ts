import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFourtComponent } from './library-fourt.component';

describe('LibraryFourtComponent', () => {
  let component: LibraryFourtComponent;
  let fixture: ComponentFixture<LibraryFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
