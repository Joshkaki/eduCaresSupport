import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFourtComponent } from './report-fourt.component';

describe('ReportFourtComponent', () => {
  let component: ReportFourtComponent;
  let fixture: ComponentFixture<ReportFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
