import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbSeventComponent } from './cb-sevent.component';

describe('CbSeventComponent', () => {
  let component: CbSeventComponent;
  let fixture: ComponentFixture<CbSeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbSeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbSeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
