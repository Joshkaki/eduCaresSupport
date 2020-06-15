import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanageSixComponent } from './usermanage-six.component';

describe('UsermanageSixComponent', () => {
  let component: UsermanageSixComponent;
  let fixture: ComponentFixture<UsermanageSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanageSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanageSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
