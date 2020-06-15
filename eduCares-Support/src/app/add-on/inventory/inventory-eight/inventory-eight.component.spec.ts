import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryEightComponent } from './inventory-eight.component';

describe('InventoryEightComponent', () => {
  let component: InventoryEightComponent;
  let fixture: ComponentFixture<InventoryEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
