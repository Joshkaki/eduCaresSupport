import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTsixComponent } from './inventory-tsix.component';

describe('InventoryTsixComponent', () => {
  let component: InventoryTsixComponent;
  let fixture: ComponentFixture<InventoryTsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
