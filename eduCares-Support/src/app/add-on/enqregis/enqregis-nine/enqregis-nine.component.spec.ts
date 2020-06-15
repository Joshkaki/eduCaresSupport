import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisNineComponent } from './enqregis-nine.component';

describe('EnqregisNineComponent', () => {
  let component: EnqregisNineComponent;
  let fixture: ComponentFixture<EnqregisNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
