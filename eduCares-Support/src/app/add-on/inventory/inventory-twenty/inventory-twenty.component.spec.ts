import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTwentyComponent } from './inventory-twenty.component';

describe('InventoryTwentyComponent', () => {
  let component: InventoryTwentyComponent;
  let fixture: ComponentFixture<InventoryTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
