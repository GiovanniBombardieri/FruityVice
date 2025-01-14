import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFruitsComponent } from './all-fruits.component';

describe('AllFruitsComponent', () => {
  let component: AllFruitsComponent;
  let fixture: ComponentFixture<AllFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFruitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
