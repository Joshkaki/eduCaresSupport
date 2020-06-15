import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOneComponent } from './settings-one.component';

describe('SettingsOneComponent', () => {
  let component: SettingsOneComponent;
  let fixture: ComponentFixture<SettingsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
