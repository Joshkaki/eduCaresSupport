import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTnineComponent } from './inventory-tnine.component';

describe('InventoryTnineComponent', () => {
  let component: InventoryTnineComponent;
  let fixture: ComponentFixture<InventoryTnineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTnineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
