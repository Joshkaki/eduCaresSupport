import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelFiveComponent } from './hostel-five.component';

describe('HostelFiveComponent', () => {
  let component: HostelFiveComponent;
  let fixture: ComponentFixture<HostelFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
