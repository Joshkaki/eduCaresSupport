import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryThreetComponent } from './inventory-threet.component';

describe('InventoryThreetComponent', () => {
  let component: InventoryThreetComponent;
  let fixture: ComponentFixture<InventoryThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
