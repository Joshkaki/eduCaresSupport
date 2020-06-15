import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsThreeComponent } from './settings-three.component';

describe('SettingsThreeComponent', () => {
  let component: SettingsThreeComponent;
  let fixture: ComponentFixture<SettingsThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
