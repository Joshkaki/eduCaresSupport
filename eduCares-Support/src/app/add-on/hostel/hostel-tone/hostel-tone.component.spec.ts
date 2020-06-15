import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelToneComponent } from './hostel-tone.component';

describe('HostelToneComponent', () => {
  let component: HostelToneComponent;
  let fixture: ComponentFixture<HostelToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
