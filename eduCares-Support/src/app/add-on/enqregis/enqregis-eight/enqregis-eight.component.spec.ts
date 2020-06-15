import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisEightComponent } from './enqregis-eight.component';

describe('EnqregisEightComponent', () => {
  let component: EnqregisEightComponent;
  let fixture: ComponentFixture<EnqregisEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
