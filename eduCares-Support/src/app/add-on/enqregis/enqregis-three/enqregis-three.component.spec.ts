import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisThreeComponent } from './enqregis-three.component';

describe('EnqregisThreeComponent', () => {
  let component: EnqregisThreeComponent;
  let fixture: ComponentFixture<EnqregisThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
