import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTenComponent } from './settings-ten.component';

describe('SettingsTenComponent', () => {
  let component: SettingsTenComponent;
  let fixture: ComponentFixture<SettingsTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
