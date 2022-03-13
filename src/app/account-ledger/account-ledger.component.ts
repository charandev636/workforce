import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account-ledger',
  templateUrl: './account-ledger.component.html',
  styleUrls: ['./account-ledger.component.scss'],
})
export class AccountLedgerComponent implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {}

  goToHome(){
    this.nav.navigateRoot(['home']);
  }
}
