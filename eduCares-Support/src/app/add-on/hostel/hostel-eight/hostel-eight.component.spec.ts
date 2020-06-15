import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelEightComponent } from './hostel-eight.component';

describe('HostelEightComponent', () => {
  let component: HostelEightComponent;
  let fixture: ComponentFixture<HostelEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
