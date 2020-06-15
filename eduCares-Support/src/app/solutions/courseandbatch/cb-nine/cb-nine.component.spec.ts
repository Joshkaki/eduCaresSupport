import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbNineComponent } from './cb-nine.component';

describe('CbNineComponent', () => {
  let component: CbNineComponent;
  let fixture: ComponentFixture<CbNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
