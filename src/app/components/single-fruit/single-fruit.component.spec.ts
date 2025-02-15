import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import { of } from "rxjs";

import { SingleFruitComponent } from "./single-fruit.component";
import { ApiService } from "../../service/api.service.service";

describe("SingleFruitComponent", () => {
  let component: SingleFruitComponent;
  let fixture: ComponentFixture<SingleFruitComponent>;
  let apiServiceMock: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj("ApiService", ["getSingleFruit"]);

    apiServiceMock.getSingleFruit.and.returnValue(
      of({
        name: "Apple",
        id: 6,
        family: "Rosaceae",
        order: "Rosales",
        genus: "Malus",
        nutritions: {
          calories: 52,
          fat: 0.4,
          sugar: 10.3,
          carbohydrates: 11.4,
          protein: 0.3,
        },
      })
    );

    await TestBed.configureTestingModule({
      imports: [SingleFruitComponent],
      providers: [
        provideHttpClient(),
        { provide: ApiService, useValue: apiServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
