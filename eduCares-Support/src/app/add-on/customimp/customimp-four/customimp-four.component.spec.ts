import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpFourComponent } from './customimp-four.component';

describe('CustomimpFourComponent', () => {
  let component: CustomimpFourComponent;
  let fixture: ComponentFixture<CustomimpFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
