import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbFourtComponent } from './cb-fourt.component';

describe('CbFourtComponent', () => {
  let component: CbFourtComponent;
  let fixture: ComponentFixture<CbFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
