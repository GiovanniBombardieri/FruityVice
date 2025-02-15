import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";

import { AllFruitsComponent } from "./all-fruits.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("AllFruitsComponent", () => {
  let component: AllFruitsComponent;
  let fixture: ComponentFixture<AllFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFruitsComponent, BrowserAnimationsModule],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AllFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
