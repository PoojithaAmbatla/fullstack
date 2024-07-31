import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCustomerComponent } from './post-customer/post-customer.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'/get-all-customers', pathMatch:'full'},
  {path:'post-customer',component:PostCustomerComponent},
  {path:'get-all-customers',component:GetAllCustomersComponent},
  {path:'customer/:id',component:UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
