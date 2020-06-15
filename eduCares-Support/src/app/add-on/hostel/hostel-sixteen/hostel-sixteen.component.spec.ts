import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelSixteenComponent } from './hostel-sixteen.component';

describe('HostelSixteenComponent', () => {
  let component: HostelSixteenComponent;
  let fixture: ComponentFixture<HostelSixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelSixteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
