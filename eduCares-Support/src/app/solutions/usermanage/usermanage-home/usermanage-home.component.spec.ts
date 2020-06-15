import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanageHomeComponent } from './usermanage-home.component';

describe('UsermanageHomeComponent', () => {
  let component: UsermanageHomeComponent;
  let fixture: ComponentFixture<UsermanageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
