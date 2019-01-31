import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { OrdersComponent } from './menu/orders/orders.component';
import { FooterComponent } from './menu/footer/footer.component';
import { CustomersComponent } from './menu/customers/customers.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './menu/customers/customer/customer.component';
import { CardComponent } from './menu/card/card.component';
import { TabComponent } from './tab/tab.component';
import { SharedModule } from './shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    FooterComponent,
    CustomersComponent,
    CustomerComponent,
    CardComponent,
    TabComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
      TranslateModule.forRoot({
        loader: {
        provide: TranslateLoader, useFactory: HttpLoaderFactory,
        deps: [HttpClient] }
        }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Obligatoire pour la compilation en AOT (Ahead of time)
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: 'assets/i18n/customer/', suffix: '.json'
    },
    {
      prefix: 'assets/i18n/shared/', suffix: '.json'
    }
  ]);
}

