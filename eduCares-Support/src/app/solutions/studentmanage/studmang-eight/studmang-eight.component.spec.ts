import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangEightComponent } from './studmang-eight.component';

describe('StudmangEightComponent', () => {
  let component: StudmangEightComponent;
  let fixture: ComponentFixture<StudmangEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
