import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {

  productList: any;
  otherList: any;
  extraList: any;
  constructor(private router: Router,
    private nav: NavController,
    public menuCtrl: MenuController,) {
    this.checkLogs();

  //   this.menuOptions = [
  //     {
  //         title: "Home",
  //         url: "home",
  //         imgs: "assets/svg/home-dark.svg",
  //     },
  //     {
  //         title: "Settings",
  //         url: "home",
  //          imgs: "assets/svg/expenses.svg",
  //     }
  // ];
  this.productList = [
    {name:'Book Order', img:'../../assets/images/dashboard-icons/delivery-box.png',
    url: 'bookorder'},
    {name:'Order histroy', img:'../../assets/images/dashboard-icons/order-history.png',
    url: 'orderhistory'},
    {name:'Product list', img:'../../assets/images/dashboard-icons/product-list.png',
    url: 'product'},
    {name:'Account Ledger', img:'../../assets/images/dashboard-icons/Accountledger.png',
    url: 'home'},
    {name:'Reports', img:'../../assets/images/dashboard-icons/report.png',
    url: 'reports'},
    {name:'Payment History', img:'../../assets/images/dashboard-icons/paymenthistory.png',
    url: 'payment'},
];
this.otherList = [
    {name:'New Products & offers', img:'../../assets/images/dashboard-icons/new-product.png',
    url: 'home'},
    {name:'Exchange / Return Product', img:'../../assets/images/dashboard-icons/product-return.png',
    url: 'exchangereturns'},
];
this.extraList = [
  {name:'Settings', img:'../../assets/images/dashboard-icons/admin.png',
  url: 'home'},
  {name:'About Us', img:'../../assets/images/dashboard-icons/user.png',
  url: 'home'},
  {name:'Share', img:'../../assets/images/dashboard-icons/next.png',
  url: 'home'},
  {name:'Log out', img:'../../assets/images/dashboard-icons/admin.png',
   url: 'Login'},
];

  }

  checkLogs(){
    if (localStorage.getItem('introduction') === 'true') {

      //this.router.navigate(['bookorder']);
     // this.router.navigate(['Intro-sliders']);
      this.nav.navigateRoot(['pay-now']);

    } else {
      this.router.navigate(['Intro-sliders']);
    }
  }

  menutoggle() {
    this.menuCtrl.enable(true, 'mainMenu');
    this.menuCtrl.enable(false, 'subMenu');
}
navigateToNext(url){
 // this.router.navigateByUrl([url]);
  this.nav.navigateRoot([url]);
}

}
