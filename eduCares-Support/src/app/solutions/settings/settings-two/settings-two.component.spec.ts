import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTwoComponent } from './settings-two.component';

describe('SettingsTwoComponent', () => {
  let component: SettingsTwoComponent;
  let fixture: ComponentFixture<SettingsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
