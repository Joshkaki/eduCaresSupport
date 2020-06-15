import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelSevenComponent } from './hostel-seven.component';

describe('HostelSevenComponent', () => {
  let component: HostelSevenComponent;
  let fixture: ComponentFixture<HostelSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
