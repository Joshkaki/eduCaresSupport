import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbEightComponent } from './cb-eight.component';

describe('CbEightComponent', () => {
  let component: CbEightComponent;
  let fixture: ComponentFixture<CbEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
