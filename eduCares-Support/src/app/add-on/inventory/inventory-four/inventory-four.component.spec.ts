import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFourComponent } from './inventory-four.component';

describe('InventoryFourComponent', () => {
  let component: InventoryFourComponent;
  let fixture: ComponentFixture<InventoryFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
