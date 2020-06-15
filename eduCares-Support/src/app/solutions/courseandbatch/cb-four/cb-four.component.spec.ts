import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbFourComponent } from './cb-four.component';

describe('CbFourComponent', () => {
  let component: CbFourComponent;
  let fixture: ComponentFixture<CbFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
