import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyHomeComponent } from './tally-home.component';

describe('TallyHomeComponent', () => {
  let component: TallyHomeComponent;
  let fixture: ComponentFixture<TallyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
