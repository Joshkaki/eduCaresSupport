import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelFifteenComponent } from './hostel-fifteen.component';

describe('HostelFifteenComponent', () => {
  let component: HostelFifteenComponent;
  let fixture: ComponentFixture<HostelFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
