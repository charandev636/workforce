import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pay-now',
  templateUrl: './pay-now.component.html',
  styleUrls: ['./pay-now.component.scss'],
})
export class PayNowComponent implements OnInit {
  payMethod = [
    {name:'By Cash', imgsrc:'../../../assets/svg/payment-method.svg'},
    {name:'By Online', imgsrc:'../../../assets/svg/online-payment.svg'},
    {name:'By Online', imgsrc:'../../../assets/svg/cheque.svg'},
  ];
  constructor(private nav: NavController) { }

  ngOnInit() {}
  backBtn(){
    this.nav.navigateRoot(['payment']);
  }
}
