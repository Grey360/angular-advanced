import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../Customer';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CUSTOMERS_URL } from '../TOKENS';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    @Inject(CUSTOMERS_URL) private url: string,
    private http: HttpClient
  ) { }

  getById(id: number): Observable<HttpResponse<Customer>> {
    return this.http.get<Customer>(this.url + '/' + id, { observe: 'response' });
  }

  put(id: number, customer: Customer): Observable<HttpResponse<Customer>> {
    return this.http.put<Customer>(this.url + '/' + id, customer, { observe: 'response' });
  }

  post(customer: Customer): Observable<HttpResponse<Customer>> {
    return this.http.post<Customer>(this.url, customer, { observe: 'response' });
  }

  getAllCustomers(): Observable<HttpResponse<Array<Customer>>> {
    return this.http.get<Array<Customer>>(this.url, { observe: 'response' });
  }
}
