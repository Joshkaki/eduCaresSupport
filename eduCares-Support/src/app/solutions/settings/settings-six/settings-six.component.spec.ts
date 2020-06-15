import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSixComponent } from './settings-six.component';

describe('SettingsSixComponent', () => {
  let component: SettingsSixComponent;
  let fixture: ComponentFixture<SettingsSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
