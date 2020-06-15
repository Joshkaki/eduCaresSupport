import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTenComponent } from './inventory-ten.component';

describe('InventoryTenComponent', () => {
  let component: InventoryTenComponent;
  let fixture: ComponentFixture<InventoryTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
