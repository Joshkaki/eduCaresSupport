import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanageOneComponent } from './usermanage-one.component';

describe('UsermanageOneComponent', () => {
  let component: UsermanageOneComponent;
  let fixture: ComponentFixture<UsermanageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
