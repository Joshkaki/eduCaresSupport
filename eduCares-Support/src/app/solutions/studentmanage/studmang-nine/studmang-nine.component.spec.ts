import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangNineComponent } from './studmang-nine.component';

describe('StudmangNineComponent', () => {
  let component: StudmangNineComponent;
  let fixture: ComponentFixture<StudmangNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
