import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanageThreeComponent } from './usermanage-three.component';

describe('UsermanageThreeComponent', () => {
  let component: UsermanageThreeComponent;
  let fixture: ComponentFixture<UsermanageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
