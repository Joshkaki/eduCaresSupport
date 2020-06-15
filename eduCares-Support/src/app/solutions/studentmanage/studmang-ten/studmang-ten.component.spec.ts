import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangTenComponent } from './studmang-ten.component';

describe('StudmangTenComponent', () => {
  let component: StudmangTenComponent;
  let fixture: ComponentFixture<StudmangTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
