import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTthreeComponent } from './inventory-tthree.component';

describe('InventoryTthreeComponent', () => {
  let component: InventoryTthreeComponent;
  let fixture: ComponentFixture<InventoryTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
