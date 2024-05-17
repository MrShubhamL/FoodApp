import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './modules/admin/components/admin-home/admin-home.component';
import { AdminAddProductComponent } from './modules/admin/components/admin-add-product/admin-add-product.component';

const routes: Routes = [
{
  path: "",
  component: SignInComponent
},
{
  path: "registration",
  component: SignUpComponent
},
{
  path: "admin-dashboard",
  component: AdminDashboardComponent,
  children: [
    {
      path : "",
      component: AdminHomeComponent
    },
    {
      path : "admin-add-product",
      component: AdminAddProductComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
