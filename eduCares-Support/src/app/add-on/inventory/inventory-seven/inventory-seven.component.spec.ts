import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySevenComponent } from './inventory-seven.component';

describe('InventorySevenComponent', () => {
  let component: InventorySevenComponent;
  let fixture: ComponentFixture<InventorySevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
