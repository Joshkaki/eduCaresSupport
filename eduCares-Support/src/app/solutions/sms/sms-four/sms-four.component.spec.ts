import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsFourComponent } from './sms-four.component';

describe('SmsFourComponent', () => {
  let component: SmsFourComponent;
  let fixture: ComponentFixture<SmsFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
