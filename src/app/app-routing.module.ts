import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrdersComponent } from './menu/orders/orders.component';
import { CustomersComponent } from './menu/customers/customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
