import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanageFourComponent } from './usermanage-four.component';

describe('UsermanageFourComponent', () => {
  let component: UsermanageFourComponent;
  let fixture: ComponentFixture<UsermanageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanageFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
