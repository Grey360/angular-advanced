import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { OrdersComponent } from './menu/orders/orders.component';
import { FooterComponent } from './menu/footer/footer.component';
import { CustomersComponent } from './menu/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './menu/customers/customer/customer.component';
import { CardComponent } from './menu/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    FooterComponent,
    CustomersComponent,
    CustomerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
