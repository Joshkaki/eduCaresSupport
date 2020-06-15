import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbHomeComponent } from './cb-home.component';

describe('CbHomeComponent', () => {
  let component: CbHomeComponent;
  let fixture: ComponentFixture<CbHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
