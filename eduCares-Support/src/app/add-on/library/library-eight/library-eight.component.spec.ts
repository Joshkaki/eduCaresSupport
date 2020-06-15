import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryEightComponent } from './library-eight.component';

describe('LibraryEightComponent', () => {
  let component: LibraryEightComponent;
  let fixture: ComponentFixture<LibraryEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
