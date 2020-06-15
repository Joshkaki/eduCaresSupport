import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTwoComponent } from './hostel-two.component';

describe('HostelTwoComponent', () => {
  let component: HostelTwoComponent;
  let fixture: ComponentFixture<HostelTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
