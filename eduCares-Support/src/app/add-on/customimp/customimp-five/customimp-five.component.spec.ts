import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpFiveComponent } from './customimp-five.component';

describe('CustomimpFiveComponent', () => {
  let component: CustomimpFiveComponent;
  let fixture: ComponentFixture<CustomimpFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
