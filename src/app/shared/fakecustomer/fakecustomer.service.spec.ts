import { TestBed } from '@angular/core/testing';

import { FakeCustomerService } from './fakecustomer.service';
import { SharedModule } from '../shared.module';
import { CUSTOMERS_URL } from '../TOKENS';

describe('FakecustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: CUSTOMERS_URL, useValue: CUSTOMERS_URL
      },
    ],
    imports: [SharedModule]
  }));

  it('should be created', () => {
    const service: FakeCustomerService = TestBed.get(FakeCustomerService);
    expect(service).toBeTruthy();
  });
});
