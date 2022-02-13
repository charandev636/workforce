import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  mainProductsList = ['1','2','3','4'];
  subProductsList = ['1','2','3','4','5'];

  constructor( private nav: NavController) { }

  ngOnInit() {}

  goToHome(){
    this.nav.navigateRoot(['home']);
  }
}
