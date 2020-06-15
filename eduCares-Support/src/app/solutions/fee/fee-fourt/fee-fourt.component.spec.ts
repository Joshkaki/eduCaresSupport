import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeFourtComponent } from './fee-fourt.component';

describe('FeeFourtComponent', () => {
  let component: FeeFourtComponent;
  let fixture: ComponentFixture<FeeFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
