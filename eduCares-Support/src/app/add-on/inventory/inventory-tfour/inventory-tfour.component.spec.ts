import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTfourComponent } from './inventory-tfour.component';

describe('InventoryTfourComponent', () => {
  let component: InventoryTfourComponent;
  let fixture: ComponentFixture<InventoryTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
