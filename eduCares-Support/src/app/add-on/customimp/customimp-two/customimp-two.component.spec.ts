import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpTwoComponent } from './customimp-two.component';

describe('CustomimpTwoComponent', () => {
  let component: CustomimpTwoComponent;
  let fixture: ComponentFixture<CustomimpTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
