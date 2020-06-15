import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryThreeComponent } from './inventory-three.component';

describe('InventoryThreeComponent', () => {
  let component: InventoryThreeComponent;
  let fixture: ComponentFixture<InventoryThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
