import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelElevenComponent } from './hostel-eleven.component';

describe('HostelElevenComponent', () => {
  let component: HostelElevenComponent;
  let fixture: ComponentFixture<HostelElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
