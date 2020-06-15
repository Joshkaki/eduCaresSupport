import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFourComponent } from './settings-four.component';

describe('SettingsFourComponent', () => {
  let component: SettingsFourComponent;
  let fixture: ComponentFixture<SettingsFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
