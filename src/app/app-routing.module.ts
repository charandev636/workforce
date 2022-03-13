import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountLedgerComponent } from './account-ledger/account-ledger.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { ExchangeandreturnsComponent } from './exchangeandreturns/exchangeandreturns.component';
import { HomeComponent } from './home/home.component';
import { IntroSlidesComponent } from './intro-slides/intro-slides.component';
import { LoginComponent } from './login/login.component';
import { MerchantComponent } from './merchant/merchant.component';
import { NewProductDetailsComponent } from './new-product/new-product-details/new-product-details.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OrderHistoryDetailsComponent } from './order-history/order-history-details/order-history-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PayNowComponent } from './payment/pay-now/pay-now.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'Intro-sliders',
    redirectTo: 'Intro-sliders',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component:LoginComponent
  },
  {
    path: 'Signup',
    component:SignupComponent
  },
  {
    path: 'Intro-sliders',
    component:IntroSlidesComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'bookorder',
    component:BookOrderComponent
  },
  {
    path: 'product',
    component:ProductsComponent
  },
  {
    path: 'payment',
    component:PaymentComponent
  },
  {
    path: 'pay-now',
    component: PayNowComponent
  },
  {
    path: 'addorders',
    component:AddOrdersComponent
  },
  {
    path: 'exchangereturns',
    component:ExchangeandreturnsComponent
  },
  {
    path: 'orderhistory',
    component:OrderHistoryComponent
  },
   {
    path: 'order-history-details',
    component:OrderHistoryDetailsComponent
  },
  {
    path: 'reports',
    component:ReportsComponent
  },
  {
    path:'new-product',
    component:NewProductComponent
  },
  {
    path:'new-product-details',
    component:NewProductDetailsComponent
  },
  {
  path:'merchant',
  component:MerchantComponent
  },
  {
    path:'accountsledger',
    component:AccountLedgerComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
