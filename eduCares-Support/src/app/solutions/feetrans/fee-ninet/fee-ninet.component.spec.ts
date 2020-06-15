import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeNinetComponent } from './fee-ninet.component';

describe('FeeNinetComponent', () => {
  let component: FeeNinetComponent;
  let fixture: ComponentFixture<FeeNinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeNinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeNinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
