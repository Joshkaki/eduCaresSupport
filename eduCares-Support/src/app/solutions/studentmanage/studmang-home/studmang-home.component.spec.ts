import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangHomeComponent } from './studmang-home.component';

describe('StudmangHomeComponent', () => {
  let component: StudmangHomeComponent;
  let fixture: ComponentFixture<StudmangHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
