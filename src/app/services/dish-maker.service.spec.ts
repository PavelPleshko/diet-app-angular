import { TestBed, inject } from '@angular/core/testing';

import { DishMakerService } from './dish-maker.service';

describe('DishMakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishMakerService]
    });
  });

  it('should be created', inject([DishMakerService], (service: DishMakerService) => {
    expect(service).toBeTruthy();
  }));
});
