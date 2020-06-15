import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelOneComponent } from './hostel-one.component';

describe('HostelOneComponent', () => {
  let component: HostelOneComponent;
  let fixture: ComponentFixture<HostelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
