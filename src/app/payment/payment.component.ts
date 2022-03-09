import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  paymentsData: any;
  constructor(private nav: NavController) { }

  ngOnInit() {
    this.paymentsData = ['1','2','3','4','5','6'];
  }
  goToHome(){
    this.nav.navigateRoot(['home']);
  }

  navToPayment(){
    this.nav.navigateRoot(['pay-now']);
  }
}
