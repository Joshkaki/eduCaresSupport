import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryToneComponent } from './inventory-tone.component';

describe('InventoryToneComponent', () => {
  let component: InventoryToneComponent;
  let fixture: ComponentFixture<InventoryToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
