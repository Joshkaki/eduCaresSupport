import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpOneComponent } from './customimp-one.component';

describe('CustomimpOneComponent', () => {
  let component: CustomimpOneComponent;
  let fixture: ComponentFixture<CustomimpOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
