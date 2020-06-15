import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelFourComponent } from './hostel-four.component';

describe('HostelFourComponent', () => {
  let component: HostelFourComponent;
  let fixture: ComponentFixture<HostelFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
