import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbFivetComponent } from './cb-fivet.component';

describe('CbFivetComponent', () => {
  let component: CbFivetComponent;
  let fixture: ComponentFixture<CbFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
