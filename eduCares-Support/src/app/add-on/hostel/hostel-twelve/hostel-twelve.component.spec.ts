import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTwelveComponent } from './hostel-twelve.component';

describe('HostelTwelveComponent', () => {
  let component: HostelTwelveComponent;
  let fixture: ComponentFixture<HostelTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
