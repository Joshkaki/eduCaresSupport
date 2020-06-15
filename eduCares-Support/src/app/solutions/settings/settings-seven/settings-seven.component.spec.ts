import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSevenComponent } from './settings-seven.component';

describe('SettingsSevenComponent', () => {
  let component: SettingsSevenComponent;
  let fixture: ComponentFixture<SettingsSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
