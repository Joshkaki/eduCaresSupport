import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTwentyComponent } from './hr-twenty.component';

describe('HrTwentyComponent', () => {
  let component: HrTwentyComponent;
  let fixture: ComponentFixture<HrTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
