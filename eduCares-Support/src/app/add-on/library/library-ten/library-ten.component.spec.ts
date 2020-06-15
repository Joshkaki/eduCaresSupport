import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTenComponent } from './library-ten.component';

describe('LibraryTenComponent', () => {
  let component: LibraryTenComponent;
  let fixture: ComponentFixture<LibraryTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
