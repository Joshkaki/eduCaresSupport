import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelNineComponent } from './hostel-nine.component';

describe('HostelNineComponent', () => {
  let component: HostelNineComponent;
  let fixture: ComponentFixture<HostelNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
