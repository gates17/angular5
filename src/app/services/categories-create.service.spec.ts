import { TestBed, inject } from '@angular/core/testing';

import { CategoriesCreateService } from './categories-create.service';

describe('CategoriesCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesCreateService]
    });
  });

  it('should be created', inject([CategoriesCreateService], (service: CategoriesCreateService) => {
    expect(service).toBeTruthy();
  }));
});
