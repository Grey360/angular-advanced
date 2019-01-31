import { TestBed } from '@angular/core/testing';

import { FakeCustomerService } from './fakecustomer.service';

describe('FakecustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeCustomerService = TestBed.get(FakeCustomerService);
    expect(service).toBeTruthy();
  });
});
