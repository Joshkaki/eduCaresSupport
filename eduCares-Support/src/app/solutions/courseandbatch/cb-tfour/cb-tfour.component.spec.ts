import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTfourComponent } from './cb-tfour.component';

describe('CbTfourComponent', () => {
  let component: CbTfourComponent;
  let fixture: ComponentFixture<CbTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
