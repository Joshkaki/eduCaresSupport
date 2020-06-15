import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpThreeComponent } from './customimp-three.component';

describe('CustomimpThreeComponent', () => {
  let component: CustomimpThreeComponent;
  let fixture: ComponentFixture<CustomimpThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
