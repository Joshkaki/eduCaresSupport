import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTwelveComponent } from './inventory-twelve.component';

describe('InventoryTwelveComponent', () => {
  let component: InventoryTwelveComponent;
  let fixture: ComponentFixture<InventoryTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
