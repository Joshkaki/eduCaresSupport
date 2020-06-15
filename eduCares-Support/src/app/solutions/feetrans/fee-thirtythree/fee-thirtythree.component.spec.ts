import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThirtythreeComponent } from './fee-thirtythree.component';

describe('FeeThirtythreeComponent', () => {
  let component: FeeThirtythreeComponent;
  let fixture: ComponentFixture<FeeThirtythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThirtythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThirtythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
