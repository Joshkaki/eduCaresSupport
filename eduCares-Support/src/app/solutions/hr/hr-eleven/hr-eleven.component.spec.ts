import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrElevenComponent } from './hr-eleven.component';

describe('HrElevenComponent', () => {
  let component: HrElevenComponent;
  let fixture: ComponentFixture<HrElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
