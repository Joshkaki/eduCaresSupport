import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFiveComponent } from './settings-five.component';

describe('SettingsFiveComponent', () => {
  let component: SettingsFiveComponent;
  let fixture: ComponentFixture<SettingsFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
