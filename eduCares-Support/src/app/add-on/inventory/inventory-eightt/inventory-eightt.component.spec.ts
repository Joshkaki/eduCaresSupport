import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryEighttComponent } from './inventory-eightt.component';

describe('InventoryEighttComponent', () => {
  let component: InventoryEighttComponent;
  let fixture: ComponentFixture<InventoryEighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryEighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryEighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
