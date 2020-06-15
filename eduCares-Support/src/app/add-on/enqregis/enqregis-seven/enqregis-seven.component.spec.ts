import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisSevenComponent } from './enqregis-seven.component';

describe('EnqregisSevenComponent', () => {
  let component: EnqregisSevenComponent;
  let fixture: ComponentFixture<EnqregisSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
