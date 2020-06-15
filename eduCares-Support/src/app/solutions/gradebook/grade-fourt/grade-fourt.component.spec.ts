import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFourtComponent } from './grade-fourt.component';

describe('GradeFourtComponent', () => {
  let component: GradeFourtComponent;
  let fixture: ComponentFixture<GradeFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
