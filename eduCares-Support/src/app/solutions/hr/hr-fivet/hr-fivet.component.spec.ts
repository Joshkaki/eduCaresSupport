import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFivetComponent } from './hr-fivet.component';

describe('HrFivetComponent', () => {
  let component: HrFivetComponent;
  let fixture: ComponentFixture<HrFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
