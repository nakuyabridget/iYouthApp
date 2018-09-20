import { TestBed, inject } from '@angular/core/testing';

import { JobDataServiceService } from './job-data-service.service';

describe('JobDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobDataServiceService]
    });
  });

  it('should be created', inject([JobDataServiceService], (service: JobDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
