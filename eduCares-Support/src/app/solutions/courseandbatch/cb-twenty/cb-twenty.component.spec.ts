import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTwentyComponent } from './cb-twenty.component';

describe('CbTwentyComponent', () => {
  let component: CbTwentyComponent;
  let fixture: ComponentFixture<CbTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
