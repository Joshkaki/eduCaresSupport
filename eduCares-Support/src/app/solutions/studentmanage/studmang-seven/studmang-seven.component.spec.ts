import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangSevenComponent } from './studmang-seven.component';

describe('StudmangSevenComponent', () => {
  let component: StudmangSevenComponent;
  let fixture: ComponentFixture<StudmangSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
