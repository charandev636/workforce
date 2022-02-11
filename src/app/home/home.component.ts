import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList = [
    {name:'Book Order', img:'../../assets/images/dashboard-icons/delivery-box.png'},
    {name:'Order histroy', img:'../../assets/images/dashboard-icons/order-history.png'},
    {name:'Product list', img:'../../assets/images/dashboard-icons/product-list.png'},
    {name:'Account Ledger', img:'../../assets/images/dashboard-icons/Accountledger.png'},
    {name:'Reports', img:'../../assets/images/dashboard-icons/report.png'},
    {name:'Payment History', img:'../../assets/images/dashboard-icons/paymenthistory.png'},
];
otherList = [
    {name:'New Products & offers', img:'../../assets/images/dashboard-icons/new-product.png'},
    {name:'Expiry / Return Product', img:'../../assets/images/dashboard-icons/product-return.png'},
];
  constructor() { }

  ngOnInit() {}

}
