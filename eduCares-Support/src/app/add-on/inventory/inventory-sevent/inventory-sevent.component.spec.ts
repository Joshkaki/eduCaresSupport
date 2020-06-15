import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySeventComponent } from './inventory-sevent.component';

describe('InventorySeventComponent', () => {
  let component: InventorySeventComponent;
  let fixture: ComponentFixture<InventorySeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
