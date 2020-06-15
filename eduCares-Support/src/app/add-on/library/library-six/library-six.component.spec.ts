import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySixComponent } from './library-six.component';

describe('LibrarySixComponent', () => {
  let component: LibrarySixComponent;
  let fixture: ComponentFixture<LibrarySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
