import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList = [
    {
      name: 'Book Order', img: '../../assets/images/dashboard-icons/delivery-box.png',
      url: 'bookorder'
    },
    {
      name: 'Order histroy', img: '../../assets/images/dashboard-icons/order-history.png',
      url: 'orderhistory'
    },
    {
      name: 'Product list', img: '../../assets/images/dashboard-icons/product-list.png',
      url: 'product'
    },
    {
      name: 'Accounts Ledger', img: '../../assets/images/dashboard-icons/Accountledger.png',
      url: 'accountsledger'
    },
    {
      name: 'Reports', img: '../../assets/images/dashboard-icons/report.png',
      url: 'reports'
    },
    {
      name: 'Payment History', img: '../../assets/images/dashboard-icons/paymenthistory.png',
      url: 'payment'
    },
  ];
  otherList = [
    {
      name: 'New Products & offers', img: '../../assets/images/dashboard-icons/new-product.png',
      url: 'new-product'
    },
    {
      name: 'Exchange / Return Product', img: '../../assets/images/dashboard-icons/product-return.png',
      url: 'exchangereturns'
    },
  ];
  constructor(private router: Router,
    private nav: NavController) { }

  ngOnInit() { }

  navigateToNext(url) {
    this.nav.navigateRoot([url]);
  }

  bookOrder() {
    this.router.navigate(['bookorder']);
  }
}
