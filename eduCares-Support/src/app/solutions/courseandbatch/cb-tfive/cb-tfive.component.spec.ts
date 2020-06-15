import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTfiveComponent } from './cb-tfive.component';

describe('CbTfiveComponent', () => {
  let component: CbTfiveComponent;
  let fixture: ComponentFixture<CbTfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
