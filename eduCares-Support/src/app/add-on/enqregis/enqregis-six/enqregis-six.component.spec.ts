import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqregisSixComponent } from './enqregis-six.component';

describe('EnqregisSixComponent', () => {
  let component: EnqregisSixComponent;
  let fixture: ComponentFixture<EnqregisSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqregisSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqregisSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
