import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTtwoComponent } from './inventory-ttwo.component';

describe('InventoryTtwoComponent', () => {
  let component: InventoryTtwoComponent;
  let fixture: ComponentFixture<InventoryTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
