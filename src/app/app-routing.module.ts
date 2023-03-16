import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"forbidden",
    component:ForbiddenComponent
  },
  
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"order",
    component:OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
