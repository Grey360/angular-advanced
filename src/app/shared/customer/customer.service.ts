import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../Customer';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomers(): Observable<HttpResponse<Array<Customer>>> {
    return this.http.get<Array<Customer>>(this.url, { observe: 'response' });
  }
}
