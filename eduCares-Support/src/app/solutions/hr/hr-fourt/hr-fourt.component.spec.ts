import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFourtComponent } from './hr-fourt.component';

describe('HrFourtComponent', () => {
  let component: HrFourtComponent;
  let fixture: ComponentFixture<HrFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
