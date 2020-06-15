import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryThreeComponent } from './library-three.component';

describe('LibraryThreeComponent', () => {
  let component: LibraryThreeComponent;
  let fixture: ComponentFixture<LibraryThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
