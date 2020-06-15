import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelThreComponent } from './hostel-thre.component';

describe('HostelThreComponent', () => {
  let component: HostelThreComponent;
  let fixture: ComponentFixture<HostelThreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelThreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelThreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
