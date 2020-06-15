import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisTwoComponent } from './enqregis-two.component';

describe('EnqregisTwoComponent', () => {
  let component: EnqregisTwoComponent;
  let fixture: ComponentFixture<EnqregisTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
