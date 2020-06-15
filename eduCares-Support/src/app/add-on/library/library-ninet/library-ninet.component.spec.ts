import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNinetComponent } from './library-ninet.component';

describe('LibraryNinetComponent', () => {
  let component: LibraryNinetComponent;
  let fixture: ComponentFixture<LibraryNinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryNinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryNinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
