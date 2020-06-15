import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudmangSixComponent } from './studmang-six.component';

describe('StudmangSixComponent', () => {
  let component: StudmangSixComponent;
  let fixture: ComponentFixture<StudmangSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudmangSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudmangSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
