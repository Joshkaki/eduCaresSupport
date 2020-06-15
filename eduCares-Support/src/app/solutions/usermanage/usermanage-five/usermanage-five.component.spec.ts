import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanageFiveComponent } from './usermanage-five.component';

describe('UsermanageFiveComponent', () => {
  let component: UsermanageFiveComponent;
  let fixture: ComponentFixture<UsermanageFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanageFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
