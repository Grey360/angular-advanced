import { Customer } from './../../../shared/Customer';
import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, AfterViewInit {
  @Input() customer: Customer;
  @ViewChild('customerName') isVip: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.customer.isVip) {
      this.isVip.nativeElement.style.color = 'red';
    }
  }
}
