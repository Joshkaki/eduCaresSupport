import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFiveComponent } from './inventory-five.component';

describe('InventoryFiveComponent', () => {
  let component: InventoryFiveComponent;
  let fixture: ComponentFixture<InventoryFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
