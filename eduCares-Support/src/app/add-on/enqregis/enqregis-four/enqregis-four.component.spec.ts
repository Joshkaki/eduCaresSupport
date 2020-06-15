import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisFourComponent } from './enqregis-four.component';

describe('EnqregisFourComponent', () => {
  let component: EnqregisFourComponent;
  let fixture: ComponentFixture<EnqregisFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
