import { TestBed, inject } from '@angular/core/testing';

import { CramService } from './cram.service';

describe('CramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CramService]
    });
  });

  it('should be created', inject([CramService], (service: CramService) => {
    expect(service).toBeTruthy();
  }));
});
