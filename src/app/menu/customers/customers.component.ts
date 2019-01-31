import { Observable } from 'rxjs/internal/Observable';
import { CustomerService } from './../../shared/customer/customer.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Customer } from '../../shared/Customer';
import { CustomerComponent } from './customer/customer.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {

  sub: Subscription;
  customersList: Observable<Customer[]>;
  @ViewChild(CustomerComponent) customer: CustomerComponent;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.loadCustomers();
    this.testSubscription();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  testSubscription() {
    this.sub = this.customerService.getObs().subscribe(test => {
      console.log(test);
    });
  }

  loadCustomers() {
    this.customersList = this.customerService.getAllCustomers();
  }

  customerSelected(customer: Customer) {
    customer.selected = !customer.selected;
  }
}
