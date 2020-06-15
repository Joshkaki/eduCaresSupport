import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesHomeComponent } from './themes-home.component';

describe('ThemesHomeComponent', () => {
  let component: ThemesHomeComponent;
  let fixture: ComponentFixture<ThemesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
