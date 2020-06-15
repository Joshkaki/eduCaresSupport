import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbThreeComponent } from './cb-three.component';

describe('CbThreeComponent', () => {
  let component: CbThreeComponent;
  let fixture: ComponentFixture<CbThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
