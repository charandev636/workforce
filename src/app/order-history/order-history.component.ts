import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  bookingOrdersData: any;
  constructor(private nav: NavController,private router: Router) { }

  ngOnInit() {
    this.bookingOrdersData = [
      {orderid: 1, amount: 2000, billno: 2331, orderof: 'Masqati private limited', remark:'no remarks',date: '2 Feb 2022 10:12',
      name:'Guntuka Suman', status: 'In progress'},
      {orderid: 2, amount: 6000, billno: 13433, orderof: 'Masqati private limited', remark:'no remarks',date: '2 Feb 2022 10:12',
      name:'Guntuka Suman', status: 'In progress'},
      {orderid: 3, amount: 4000, billno: 11223, orderof: 'Masqati private limited', remark:'no remarks',date: '2 Feb 2022 10:12',
      name:'Guntuka Suman', status: 'In progress'},
      {orderid: 4, amount: 3000, billno: 13443, orderof: 'Masqati private limited', remark:'no remarks',date: '2 Feb 2022 10:12',
      name:'Guntuka Suman', status: 'In progress'},
      {orderid: 5, amount: 67000, billno: 123323, orderof: 'Masqati private limited', remark:'no remarks',date: '2 Feb 2022 10:12',
      name:'Guntuka Suman', status: 'In progress'},
      {orderid: 6, amount: 25000, billno: 13234, orderof: 'Masqati private limited', remark:'no remarks',date: '2 Feb 2022 10:12',
      name:'Guntuka Suman', status: 'In progress'},
    ];

  }
  bookOrder() {
    this.router.navigate(['bookorder']);
  }
  goToHome(){
    this.nav.navigateRoot(['home']);
  }


  goToOrderDetails(){
    this.nav.navigateRoot(['order-history-details']);
  }
  
}
