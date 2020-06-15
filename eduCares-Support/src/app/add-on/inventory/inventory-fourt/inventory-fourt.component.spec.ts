import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFourtComponent } from './inventory-fourt.component';

describe('InventoryFourtComponent', () => {
  let component: InventoryFourtComponent;
  let fixture: ComponentFixture<InventoryFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
