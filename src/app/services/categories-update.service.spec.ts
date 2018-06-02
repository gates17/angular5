import { TestBed, inject } from '@angular/core/testing';

import { CategoriesUpdateService } from './categories-update.service';

describe('CategoriesUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesUpdateService]
    });
  });

  it('should be created', inject([CategoriesUpdateService], (service: CategoriesUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
