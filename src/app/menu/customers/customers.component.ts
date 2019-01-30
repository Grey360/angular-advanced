import { CustomerService } from './../../shared/customer/customer.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Customer } from '../../shared/Customer';
import { Address } from '../../shared/Address';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  private customersList: Customer[];
  @ViewChild(CustomerComponent) customer: CustomerComponent;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe(
      customers => {
        this.customersList = customers.body;
        const address = new Address(
          '240, rue Montels Eglise',
          'Suite royale',
          'MONTPELLIER',
          '34070'
        );
        const me = new Customer(
          'Gailor PETEMOYA',
          address,
          'Montpellier',
          '34070',
          true, 25,
          new Date(), 'Thanos',
          'gailor.petemoya@capgemini',
          '+337 83 69 82 86',
          'gailor.co.uk'
        );
        this.customersList.push(me);
        console.log(customers);
      }
    );
  }

  customerSelected(customer: Customer) {
    customer.selected = !customer.selected;
  }
}