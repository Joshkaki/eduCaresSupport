import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNinetComponent } from './inventory-ninet.component';

describe('InventoryNinetComponent', () => {
  let component: InventoryNinetComponent;
  let fixture: ComponentFixture<InventoryNinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryNinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryNinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
