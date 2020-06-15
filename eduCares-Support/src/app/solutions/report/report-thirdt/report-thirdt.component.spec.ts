import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportThirdtComponent } from './report-thirdt.component';

describe('ReportThirdtComponent', () => {
  let component: ReportThirdtComponent;
  let fixture: ComponentFixture<ReportThirdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportThirdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportThirdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
