import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNineComponent } from './settings-nine.component';

describe('SettingsNineComponent', () => {
  let component: SettingsNineComponent;
  let fixture: ComponentFixture<SettingsNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
