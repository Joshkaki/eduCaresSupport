import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFivetComponent } from './library-fivet.component';

describe('LibraryFivetComponent', () => {
  let component: LibraryFivetComponent;
  let fixture: ComponentFixture<LibraryFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
