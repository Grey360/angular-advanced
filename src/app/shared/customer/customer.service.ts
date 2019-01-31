import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../Customer';
import { HttpClient, HttpResponse, HttpHandler } from '@angular/common/http';
import { CUSTOMERS_URL } from '../TOKENS';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    @Inject(CUSTOMERS_URL) private url: string,
    private http: HttpClient
  ) { }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + '/' + id);
  }

  put(id: number, customer: Customer): Observable<HttpResponse<Customer>> {
    return this.http.put<Customer>(this.url + '/' + id, customer, { observe: 'response' });
  }

  post(customer: Customer): Observable<HttpResponse<Customer>> {
    return this.http.post<Customer>(this.url, customer, { observe: 'response' });
  }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.url);
  }

  getObs(): Observable<string> {
    return Observable.create((observer: Subscriber<string>) => {
      const interval = setInterval(() => observer.next('Gailor is GOD'), 2000);
      return () => clearInterval(interval);
    });
  }
}
