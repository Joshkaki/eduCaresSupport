import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesTwoComponent } from './themes-two.component';

describe('ThemesTwoComponent', () => {
  let component: ThemesTwoComponent;
  let fixture: ComponentFixture<ThemesTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemesTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
