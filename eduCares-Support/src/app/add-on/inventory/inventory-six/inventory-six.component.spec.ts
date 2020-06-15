import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySixComponent } from './inventory-six.component';

describe('InventorySixComponent', () => {
  let component: InventorySixComponent;
  let fixture: ComponentFixture<InventorySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
