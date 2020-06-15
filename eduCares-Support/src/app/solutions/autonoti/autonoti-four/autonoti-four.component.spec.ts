import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonotiFourComponent } from './autonoti-four.component';

describe('AutonotiFourComponent', () => {
  let component: AutonotiFourComponent;
  let fixture: ComponentFixture<AutonotiFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonotiFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonotiFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
