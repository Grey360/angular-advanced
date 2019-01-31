import { CUSTOMERS_URL } from './../TOKENS';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Customer } from '../Customer';
import { Address } from '../Address';
import * as moment from 'moment';

@Injectable()
export class FakeCustomerService {

 customers: Array<Customer>;

 constructor(@Inject(CUSTOMERS_URL) private url: string) {

   const stacy = new Customer('Stacy', new Address('120 Fake address', 'Florida',
     '68902'), '120 Fake address', 'Florida', true, 0, moment().year(2018).date(20).toDate());

   const michelle = new Customer('Michelle', new Address('302 Fake lol address', 'Florida',
     '68902'), '302 Fake lol address', 'Florida', false, 1, moment().year(2019).date(10).toDate());

   this.customers = new Array<Customer>();
   this.customers.push(stacy, michelle);
 }

 getAllCustomers(): Observable<HttpResponse<Array<Customer>>> {
   const httpResponse = new HttpResponse<Array<Customer>>({body: this.customers});
   return of(httpResponse);
 }

 getById(id: number): Observable<HttpResponse<Customer>> {
   const customerSelected = this.customers.find(customer => customer.id === id);
   const httpResponse = new HttpResponse<Customer>({body: customerSelected});
   return of(httpResponse);
 }
}
