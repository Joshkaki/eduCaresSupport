import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbElevenComponent } from './cb-eleven.component';

describe('CbElevenComponent', () => {
  let component: CbElevenComponent;
  let fixture: ComponentFixture<CbElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
