import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangFourComponent } from './studmang-four.component';

describe('StudmangFourComponent', () => {
  let component: StudmangFourComponent;
  let fixture: ComponentFixture<StudmangFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
