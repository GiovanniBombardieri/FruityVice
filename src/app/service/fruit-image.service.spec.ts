import { TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";

import { FruitImageService } from "./fruit-image.service";

describe("FruitImageService", () => {
  let service: FruitImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(FruitImageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
