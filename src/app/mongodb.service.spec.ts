import { TestBed } from '@angular/core/testing';

import { MongodbService } from './mongodb.service';

describe('MongodbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongodbService = TestBed.get(MongodbService);
    expect(service).toBeTruthy();
  });
});
