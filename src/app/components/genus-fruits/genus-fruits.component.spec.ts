import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenusFruitsComponent } from './genus-fruits.component';

describe('GenusFruitsComponent', () => {
  let component: GenusFruitsComponent;
  let fixture: ComponentFixture<GenusFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenusFruitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenusFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
