import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanageTwoComponent } from './usermanage-two.component';

describe('UsermanageTwoComponent', () => {
  let component: UsermanageTwoComponent;
  let fixture: ComponentFixture<UsermanageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
