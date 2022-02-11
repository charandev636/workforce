import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {

  productList : any;
  otherList : any;
  extraList : any;
  constructor(private router: Router,
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
    {name:'Book Order', img:'../../assets/images/dashboard-icons/delivery-box.png'},
    {name:'Order histroy', img:'../../assets/images/dashboard-icons/order-history.png'},
    {name:'Product list', img:'../../assets/images/dashboard-icons/product-list.png'},
    {name:'Account Ledger', img:'../../assets/images/dashboard-icons/Accountledger.png'},
    {name:'Reports', img:'../../assets/images/dashboard-icons/report.png'},
    {name:'Payment History', img:'../../assets/images/dashboard-icons/paymenthistory.png'},
];
this.otherList = [
    {name:'New Products & offers', img:'../../assets/images/dashboard-icons/new-product.png'},
    {name:'Expiry / Return Product', img:'../../assets/images/dashboard-icons/product-return.png'},
];
this.extraList = [
  {name:'Settings', img:'../../assets/images/dashboard-icons/admin.png'},
  {name:'About Us', img:'../../assets/images/dashboard-icons/user.png'},
  {name:'Share', img:'../../assets/images/dashboard-icons/next.png'},
];
    
  }

  checkLogs(){
    if (localStorage.getItem('introduction') === 'true') {
     // this.router.navigate(['home']);
      this.router.navigate(['Intro-sliders']);
      console.log('test1');
    } else {
      this.router.navigate(['Intro-sliders']);
       console.log('test2');
    }
  }
  
  menutoggle() {
    this.menuCtrl.enable(true, 'mainMenu');
    this.menuCtrl.enable(false, 'subMenu');
}

}
