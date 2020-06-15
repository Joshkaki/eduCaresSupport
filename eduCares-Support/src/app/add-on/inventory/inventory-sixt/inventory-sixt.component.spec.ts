import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySixtComponent } from './inventory-sixt.component';

describe('InventorySixtComponent', () => {
  let component: InventorySixtComponent;
  let fixture: ComponentFixture<InventorySixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
