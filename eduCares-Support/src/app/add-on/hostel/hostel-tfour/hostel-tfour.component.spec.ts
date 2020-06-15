import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTfourComponent } from './hostel-tfour.component';

describe('HostelTfourComponent', () => {
  let component: HostelTfourComponent;
  let fixture: ComponentFixture<HostelTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
