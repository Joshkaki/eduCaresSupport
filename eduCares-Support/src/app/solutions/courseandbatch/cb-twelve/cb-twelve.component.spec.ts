import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTwelveComponent } from './cb-twelve.component';

describe('CbTwelveComponent', () => {
  let component: CbTwelveComponent;
  let fixture: ComponentFixture<CbTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
