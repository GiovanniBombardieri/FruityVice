import { TestBed } from '@angular/core/testing';

import { FruitDescriptionService } from './fruit-description.service';

describe('FruitDescriptionService', () => {
  let service: FruitDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
