import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-summery',
  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.scss'],
})
export class OrderSummeryComponent implements OnInit {

  list = ['1','2','3','4'];
  isSignPage: boolean;
  constructor(private nav: NavController) { }

  ngOnInit() {}
  goToOrderHistory(){
    this.nav.navigateRoot(['home']);
  }

  showSignModal(){
   // this.isSignPage = !this.isSignPage;
   this.nav.navigateRoot(['sign']);
  }
}
