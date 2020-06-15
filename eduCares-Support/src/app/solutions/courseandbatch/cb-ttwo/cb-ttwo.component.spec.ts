import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTtwoComponent } from './cb-ttwo.component';

describe('CbTtwoComponent', () => {
  let component: CbTtwoComponent;
  let fixture: ComponentFixture<CbTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
