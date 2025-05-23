import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CreateCustomersComponent } from './create-customers/create-customers.component';

const routes: Routes = [
  {
    path:"customer",
    component: ViewCustomerComponent
  },
  {
    path:"addCustomer",
    component: AddCustomerComponent
  },
  {
    path:"createCustomer",
    component: CreateCustomersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
