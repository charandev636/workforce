import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { IntroSlidesComponent } from './intro-slides/intro-slides.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ExchangeandreturnsComponent } from './exchangeandreturns/exchangeandreturns.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ReportsComponent } from './reports/reports.component';
import { PayNowComponent } from './payment/pay-now/pay-now.component';
import { OrderSummeryComponent } from './order-summery/order-summery.component';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    IntroSlidesComponent,
    LoginComponent,
    SignupComponent,
    BookOrderComponent,
    ProductsComponent,
    PaymentComponent,
    AddOrdersComponent,
    ExchangeandreturnsComponent,
    OrderHistoryComponent,
    ReportsComponent,PayNowComponent,OrderSummeryComponent,SignComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
