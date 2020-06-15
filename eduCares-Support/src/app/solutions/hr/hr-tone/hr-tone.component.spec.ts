import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrToneComponent } from './hr-tone.component';

describe('HrToneComponent', () => {
  let component: HrToneComponent;
  let fixture: ComponentFixture<HrToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
