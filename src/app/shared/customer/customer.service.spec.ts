import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { SharedModule } from '../shared.module';

describe('CustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      SharedModule
    ]
  }));

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });
});
