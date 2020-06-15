import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpSevenComponent } from './customimp-seven.component';

describe('CustomimpSevenComponent', () => {
  let component: CustomimpSevenComponent;
  let fixture: ComponentFixture<CustomimpSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
