import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangFiveComponent } from './studmang-five.component';

describe('StudmangFiveComponent', () => {
  let component: StudmangFiveComponent;
  let fixture: ComponentFixture<StudmangFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
