import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelNineteenComponent } from './hostel-nineteen.component';

describe('HostelNineteenComponent', () => {
  let component: HostelNineteenComponent;
  let fixture: ComponentFixture<HostelNineteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelNineteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
