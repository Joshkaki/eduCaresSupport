import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThreeComponent } from './fee-three.component';

describe('FeeThreeComponent', () => {
  let component: FeeThreeComponent;
  let fixture: ComponentFixture<FeeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
