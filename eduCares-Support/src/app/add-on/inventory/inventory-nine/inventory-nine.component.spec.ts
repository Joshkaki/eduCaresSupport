import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNineComponent } from './inventory-nine.component';

describe('InventoryNineComponent', () => {
  let component: InventoryNineComponent;
  let fixture: ComponentFixture<InventoryNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
