import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelEightteenComponent } from './hostel-eightteen.component';

describe('HostelEightteenComponent', () => {
  let component: HostelEightteenComponent;
  let fixture: ComponentFixture<HostelEightteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelEightteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelEightteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
