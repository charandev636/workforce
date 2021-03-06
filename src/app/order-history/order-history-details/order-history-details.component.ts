import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-history-details',
  templateUrl: './order-history-details.component.html',
  styleUrls: ['./order-history-details.component.scss'],
})
export class OrderHistoryDetailsComponent implements OnInit {
  list = ['1','2','3','4'];
  constructor(private nav: NavController) { }

  ngOnInit() {}

  goToOrderHistory(){
    this.nav.navigateRoot(['orderhistory']);
  }

}
