import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisTenComponent } from './enqregis-ten.component';

describe('EnqregisTenComponent', () => {
  let component: EnqregisTenComponent;
  let fixture: ComponentFixture<EnqregisTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
