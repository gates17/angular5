import { TestBed, inject } from '@angular/core/testing';

import { CategoriesRemoveService } from './categories-remove.service';

describe('CategoriesRemoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesRemoveService]
    });
  });

  it('should be created', inject([CategoriesRemoveService], (service: CategoriesRemoveService) => {
    expect(service).toBeTruthy();
  }));
});
