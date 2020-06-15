import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSixComponent } from './hr-six.component';

describe('HrSixComponent', () => {
  let component: HrSixComponent;
  let fixture: ComponentFixture<HrSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
