import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEightComponent } from './settings-eight.component';

describe('SettingsEightComponent', () => {
  let component: SettingsEightComponent;
  let fixture: ComponentFixture<SettingsEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
