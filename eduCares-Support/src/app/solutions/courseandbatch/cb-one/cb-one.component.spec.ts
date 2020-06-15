import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbOneComponent } from './cb-one.component';

describe('CbOneComponent', () => {
  let component: CbOneComponent;
  let fixture: ComponentFixture<CbOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
