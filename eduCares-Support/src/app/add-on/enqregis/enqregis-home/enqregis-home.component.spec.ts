import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisHomeComponent } from './enqregis-home.component';

describe('EnqregisHomeComponent', () => {
  let component: EnqregisHomeComponent;
  let fixture: ComponentFixture<EnqregisHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
