import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelSeventeenComponent } from './hostel-seventeen.component';

describe('HostelSeventeenComponent', () => {
  let component: HostelSeventeenComponent;
  let fixture: ComponentFixture<HostelSeventeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelSeventeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
