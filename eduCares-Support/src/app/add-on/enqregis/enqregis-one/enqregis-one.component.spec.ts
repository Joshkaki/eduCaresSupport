import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisOneComponent } from './enqregis-one.component';

describe('EnqregisOneComponent', () => {
  let component: EnqregisOneComponent;
  let fixture: ComponentFixture<EnqregisOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
