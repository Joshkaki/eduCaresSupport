import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTtwoComponent } from './hostel-ttwo.component';

describe('HostelTtwoComponent', () => {
  let component: HostelTtwoComponent;
  let fixture: ComponentFixture<HostelTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
