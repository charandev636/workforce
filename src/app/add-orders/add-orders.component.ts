import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss'],
})
export class AddOrdersComponent implements OnInit {
  mainProductsList = ['1','2','3','4'];
  subProductsList = ['1','2','3','4','5'];
  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  goToHome(){
    this.nav.navigateRoot(['home']);
  }
}
