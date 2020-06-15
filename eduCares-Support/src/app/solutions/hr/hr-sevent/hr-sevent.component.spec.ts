import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSeventComponent } from './hr-sevent.component';

describe('HrSeventComponent', () => {
  let component: HrSeventComponent;
  let fixture: ComponentFixture<HrSeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrSeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
