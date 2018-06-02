import { TestBed, inject } from '@angular/core/testing';

import { CategoriesDetailsService } from './categories-details.service';

describe('CategoriesDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesDetailsService]
    });
  });

  it('should be created', inject([CategoriesDetailsService], (service: CategoriesDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
