import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTsevenComponent } from './inventory-tseven.component';

describe('InventoryTsevenComponent', () => {
  let component: InventoryTsevenComponent;
  let fixture: ComponentFixture<InventoryTsevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTsevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
