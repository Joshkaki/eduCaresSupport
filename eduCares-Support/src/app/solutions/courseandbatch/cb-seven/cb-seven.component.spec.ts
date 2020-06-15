import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbSevenComponent } from './cb-seven.component';

describe('CbSevenComponent', () => {
  let component: CbSevenComponent;
  let fixture: ComponentFixture<CbSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
