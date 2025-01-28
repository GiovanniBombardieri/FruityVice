import { TestBed } from '@angular/core/testing';

import { FruitImageService } from './fruit-image.service';

describe('FruitImageService', () => {
  let service: FruitImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
