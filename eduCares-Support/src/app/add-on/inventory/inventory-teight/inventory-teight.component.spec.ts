import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTeightComponent } from './inventory-teight.component';

describe('InventoryTeightComponent', () => {
  let component: InventoryTeightComponent;
  let fixture: ComponentFixture<InventoryTeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
