import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeimportThreeComponent } from './feeimport-three.component';

describe('FeeimportThreeComponent', () => {
  let component: FeeimportThreeComponent;
  let fixture: ComponentFixture<FeeimportThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeimportThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeimportThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
