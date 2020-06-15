import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelSixComponent } from './hostel-six.component';

describe('HostelSixComponent', () => {
  let component: HostelSixComponent;
  let fixture: ComponentFixture<HostelSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
