import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOneComponent } from './inventory-one.component';

describe('InventoryOneComponent', () => {
  let component: InventoryOneComponent;
  let fixture: ComponentFixture<InventoryOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
