import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinepayThreeComponent } from './onlinepay-three.component';

describe('OnlinepayThreeComponent', () => {
  let component: OnlinepayThreeComponent;
  let fixture: ComponentFixture<OnlinepayThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinepayThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinepayThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
