import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySixtComponent } from './library-sixt.component';

describe('LibrarySixtComponent', () => {
  let component: LibrarySixtComponent;
  let fixture: ComponentFixture<LibrarySixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
