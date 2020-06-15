import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbFiveComponent } from './cb-five.component';

describe('CbFiveComponent', () => {
  let component: CbFiveComponent;
  let fixture: ComponentFixture<CbFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
