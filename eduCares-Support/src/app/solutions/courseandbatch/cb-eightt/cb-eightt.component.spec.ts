import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbEighttComponent } from './cb-eightt.component';

describe('CbEighttComponent', () => {
  let component: CbEighttComponent;
  let fixture: ComponentFixture<CbEighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbEighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbEighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
