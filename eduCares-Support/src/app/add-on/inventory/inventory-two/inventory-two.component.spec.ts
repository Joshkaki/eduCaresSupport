import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTwoComponent } from './inventory-two.component';

describe('InventoryTwoComponent', () => {
  let component: InventoryTwoComponent;
  let fixture: ComponentFixture<InventoryTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
