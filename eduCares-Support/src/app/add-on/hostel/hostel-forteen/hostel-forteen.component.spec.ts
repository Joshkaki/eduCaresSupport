import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelForteenComponent } from './hostel-forteen.component';

describe('HostelForteenComponent', () => {
  let component: HostelForteenComponent;
  let fixture: ComponentFixture<HostelForteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelForteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelForteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
