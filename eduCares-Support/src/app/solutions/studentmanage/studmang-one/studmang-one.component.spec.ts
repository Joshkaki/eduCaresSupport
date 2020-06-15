import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangOneComponent } from './studmang-one.component';

describe('StudmangOneComponent', () => {
  let component: StudmangOneComponent;
  let fixture: ComponentFixture<StudmangOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
