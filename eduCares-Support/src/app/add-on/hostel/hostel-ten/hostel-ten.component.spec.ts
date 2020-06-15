import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTenComponent } from './hostel-ten.component';

describe('HostelTenComponent', () => {
  let component: HostelTenComponent;
  let fixture: ComponentFixture<HostelTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
