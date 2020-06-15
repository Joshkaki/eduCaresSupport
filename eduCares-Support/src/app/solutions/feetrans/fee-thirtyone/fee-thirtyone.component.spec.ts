import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThirtyoneComponent } from './fee-thirtyone.component';

describe('FeeThirtyoneComponent', () => {
  let component: FeeThirtyoneComponent;
  let fixture: ComponentFixture<FeeThirtyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThirtyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThirtyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
