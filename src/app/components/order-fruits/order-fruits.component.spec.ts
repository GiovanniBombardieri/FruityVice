import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFruitsComponent } from './order-fruits.component';

describe('OrderFruitsComponent', () => {
  let component: OrderFruitsComponent;
  let fixture: ComponentFixture<OrderFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFruitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
