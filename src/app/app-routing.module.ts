import { CommentsComponent } from './comments/comments.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './menu/customers/customers.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  {
    path: 'edit/:id', component: EditComponent,
    children: [
      { path: 'todo', component: TodoComponent },
      { path: 'comments', component: CommentsComponent }
    ]
  },
  { path: 'orders', loadChildren: './menu/orders/orders.module#OrdersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
