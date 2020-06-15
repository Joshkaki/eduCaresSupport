import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTwentyComponent } from './hostel-twenty.component';

describe('HostelTwentyComponent', () => {
  let component: HostelTwentyComponent;
  let fixture: ComponentFixture<HostelTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
