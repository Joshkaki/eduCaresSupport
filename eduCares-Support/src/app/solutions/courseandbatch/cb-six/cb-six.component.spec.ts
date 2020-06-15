import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbSixComponent } from './cb-six.component';

describe('CbSixComponent', () => {
  let component: CbSixComponent;
  let fixture: ComponentFixture<CbSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
