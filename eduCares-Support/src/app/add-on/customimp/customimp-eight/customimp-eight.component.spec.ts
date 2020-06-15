import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpEightComponent } from './customimp-eight.component';

describe('CustomimpEightComponent', () => {
  let component: CustomimpEightComponent;
  let fixture: ComponentFixture<CustomimpEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
