import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryElevenComponent } from './inventory-eleven.component';

describe('InventoryElevenComponent', () => {
  let component: InventoryElevenComponent;
  let fixture: ComponentFixture<InventoryElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
