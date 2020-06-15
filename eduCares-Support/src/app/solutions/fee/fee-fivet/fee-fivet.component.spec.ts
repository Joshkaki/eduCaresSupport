import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeFivetComponent } from './fee-fivet.component';

describe('FeeFivetComponent', () => {
  let component: FeeFivetComponent;
  let fixture: ComponentFixture<FeeFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
