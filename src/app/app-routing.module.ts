import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"admin",
    component:AdminComponent,
    canActivate:[AuthGuard],
    data:{role:['Admin']}
  },
  {
    path:"product",
    component:ProductComponent,
    canActivate:[AuthGuard],
    data:{role:['Product']}
  },
  {
    path:"order",
    component:OrderComponent,
    canActivate:[AuthGuard],
    data:{role:['Order']}
  },

  {
    path:"user",
    component:UserComponent,
    canActivate:[AuthGuard],
    data:{role:['User']}
  },
 
  
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"forbidden",
    component:ForbiddenComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
