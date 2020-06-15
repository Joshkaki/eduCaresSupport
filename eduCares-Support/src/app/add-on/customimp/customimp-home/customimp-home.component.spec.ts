import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpHomeComponent } from './customimp-home.component';

describe('CustomimpHomeComponent', () => {
  let component: CustomimpHomeComponent;
  let fixture: ComponentFixture<CustomimpHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
