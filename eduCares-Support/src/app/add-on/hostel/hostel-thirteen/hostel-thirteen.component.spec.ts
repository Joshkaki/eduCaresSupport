import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelThirteenComponent } from './hostel-thirteen.component';

describe('HostelThirteenComponent', () => {
  let component: HostelThirteenComponent;
  let fixture: ComponentFixture<HostelThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
