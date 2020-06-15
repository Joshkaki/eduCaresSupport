import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFivetComponent } from './grade-fivet.component';

describe('GradeFivetComponent', () => {
  let component: GradeFivetComponent;
  let fixture: ComponentFixture<GradeFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
