import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MainComponent } from './pages/main/main.component';
import { AccountComponent } from './pages/account/account.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AccessComponent } from './pages/account/access/access.component';
import { SecurityComponent } from './pages/account/security/security.component';
import { SubsComponent } from './pages/account/subs/subs.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'account', component: AccountComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'access', component: AccessComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'subs', component: SubsComponent },
  { path: 'productList', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
