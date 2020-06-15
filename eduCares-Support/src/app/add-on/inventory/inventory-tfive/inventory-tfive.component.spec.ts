import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTfiveComponent } from './inventory-tfive.component';

describe('InventoryTfiveComponent', () => {
  let component: InventoryTfiveComponent;
  let fixture: ComponentFixture<InventoryTfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
