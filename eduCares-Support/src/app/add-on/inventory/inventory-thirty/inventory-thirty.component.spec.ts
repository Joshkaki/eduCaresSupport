import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryThirtyComponent } from './inventory-thirty.component';

describe('InventoryThirtyComponent', () => {
  let component: InventoryThirtyComponent;
  let fixture: ComponentFixture<InventoryThirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryThirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
