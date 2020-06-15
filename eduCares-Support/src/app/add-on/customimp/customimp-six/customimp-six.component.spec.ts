import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimpSixComponent } from './customimp-six.component';

describe('CustomimpSixComponent', () => {
  let component: CustomimpSixComponent;
  let fixture: ComponentFixture<CustomimpSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimpSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimpSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
