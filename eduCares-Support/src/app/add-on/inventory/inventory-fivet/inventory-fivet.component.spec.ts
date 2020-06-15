import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFivetComponent } from './inventory-fivet.component';

describe('InventoryFivetComponent', () => {
  let component: InventoryFivetComponent;
  let fixture: ComponentFixture<InventoryFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
