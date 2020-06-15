import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTthreeComponent } from './hostel-tthree.component';

describe('HostelTthreeComponent', () => {
  let component: HostelTthreeComponent;
  let fixture: ComponentFixture<HostelTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
