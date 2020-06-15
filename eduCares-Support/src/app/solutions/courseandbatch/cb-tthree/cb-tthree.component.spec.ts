import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTthreeComponent } from './cb-tthree.component';

describe('CbTthreeComponent', () => {
  let component: CbTthreeComponent;
  let fixture: ComponentFixture<CbTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
