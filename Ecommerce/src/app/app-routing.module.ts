import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent, canActivate:[GuardService] },
  { path: 'cart', component: CartComponent, canActivate:[GuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent, canActivate:[GuardService] },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
