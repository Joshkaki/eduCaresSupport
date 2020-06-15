import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTwoComponent } from './sms-two.component';

describe('SmsTwoComponent', () => {
  let component: SmsTwoComponent;
  let fixture: ComponentFixture<SmsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
