import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesOneComponent } from './themes-one.component';

describe('ThemesOneComponent', () => {
  let component: ThemesOneComponent;
  let fixture: ComponentFixture<ThemesOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemesOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
