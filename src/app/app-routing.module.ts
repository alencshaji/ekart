import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsermngComponent } from './admin-usermng/admin-usermng.component';
import { AdminProductmngComponent } from './admin-productmng/admin-productmng.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-home",component:AdminHomeComponent},
  {path:"admin-usermng",component:AdminUsermngComponent},
  {path:"admin-productmng",component:AdminProductmngComponent},
  {path:"admin-addProduct",component:AddProductComponent},
  { path: "admin-editProduct/:id", component: EditProductComponent },
  {path:"product-view/:id",component:SingleViewComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"user-signup",component:UserRegisterComponent},
  {path:"wishlist/:id",component:WishlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
