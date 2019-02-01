import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { BACKEND_URL, CUSTOMERS_URL } from '../TOKENS';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorService
    ]
  }));

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });
});
