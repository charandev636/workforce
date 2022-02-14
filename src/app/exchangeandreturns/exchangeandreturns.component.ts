import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exchangeandreturns',
  templateUrl: './exchangeandreturns.component.html',
  styleUrls: ['./exchangeandreturns.component.scss'],
})
export class ExchangeandreturnsComponent implements OnInit {

  tabsArr = [
    {
      name: 'Exchange',
      isSelect: true
    },
    {
      name: 'Return',
      isSelect: false
    },
    {
      name: 'Damage',
      isSelect: false
    }
  ];
  tabsArrSelect = [true, false, false];
  constructor(private nav: NavController) { }

  ngOnInit() { }

  goToHome() {
    this.nav.navigateRoot(['home']);
  }
  isSelectTab(obj){

    this.tabsArr.forEach((item) => {
      item.isSelect = false;
  });
  obj.isSelect = !obj.isSelect;

  }
}
