import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangTwoComponent } from './studmang-two.component';

describe('StudmangTwoComponent', () => {
  let component: StudmangTwoComponent;
  let fixture: ComponentFixture<StudmangTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
