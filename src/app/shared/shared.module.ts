import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer/customer.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDirective } from './directives/tab.directive';
import { WindowsizeDirective } from './directives/windowsize.directive';
import { InputDirective } from './directives/input.directive';
import { IS_PROD, CUSTOMERS_URL, BACKEND_URL } from './TOKENS';
import { FakeCustomerService } from './fakecustomer/fakecustomer.service';

@NgModule({
  declarations: [
    TabDirective,
    WindowsizeDirective,
    InputDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: BACKEND_URL, useValue: CUSTOMERS_URL
    },
    {
      provide: CustomerService,
      useClass: (BACKEND_URL, httpClient) => IS_PROD ? new CustomerService(BACKEND_URL, httpClient) : new FakeCustomerService(BACKEND_URL),
      deps: [BACKEND_URL, HttpClient]
    }
  ],
  exports: [
    TabDirective,
    WindowsizeDirective,
    InputDirective
  ]
})
export class SharedModule { }
