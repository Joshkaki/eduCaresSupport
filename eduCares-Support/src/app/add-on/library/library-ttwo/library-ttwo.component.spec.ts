import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTtwoComponent } from './library-ttwo.component';

describe('LibraryTtwoComponent', () => {
  let component: LibraryTtwoComponent;
  let fixture: ComponentFixture<LibraryTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
