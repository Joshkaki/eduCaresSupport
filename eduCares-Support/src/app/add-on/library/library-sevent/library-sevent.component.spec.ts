import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySeventComponent } from './library-sevent.component';

describe('LibrarySeventComponent', () => {
  let component: LibrarySeventComponent;
  let fixture: ComponentFixture<LibrarySeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
