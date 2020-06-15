import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrNinetComponent } from './hr-ninet.component';

describe('HrNinetComponent', () => {
  let component: HrNinetComponent;
  let fixture: ComponentFixture<HrNinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrNinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrNinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
