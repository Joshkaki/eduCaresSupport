import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisFiveComponent } from './enqregis-five.component';

describe('EnqregisFiveComponent', () => {
  let component: EnqregisFiveComponent;
  let fixture: ComponentFixture<EnqregisFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
