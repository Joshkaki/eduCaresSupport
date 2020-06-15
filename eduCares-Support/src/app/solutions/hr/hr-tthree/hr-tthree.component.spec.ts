import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTthreeComponent } from './hr-tthree.component';

describe('HrTthreeComponent', () => {
  let component: HrTthreeComponent;
  let fixture: ComponentFixture<HrTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
