import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbNinetComponent } from './cb-ninet.component';

describe('CbNinetComponent', () => {
  let component: CbNinetComponent;
  let fixture: ComponentFixture<CbNinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbNinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbNinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
