import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbToneComponent } from './cb-tone.component';

describe('CbToneComponent', () => {
  let component: CbToneComponent;
  let fixture: ComponentFixture<CbToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
