import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyFruitsComponent } from './family-fruits.component';

describe('FamilyFruitsComponent', () => {
  let component: FamilyFruitsComponent;
  let fixture: ComponentFixture<FamilyFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyFruitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
