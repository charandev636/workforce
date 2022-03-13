import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-product-details',
  templateUrl: './new-product-details.component.html',
  styleUrls: ['./new-product-details.component.scss'],
})
export class NewProductDetailsComponent implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {}
  goToNewProduct(){
    this.nav.navigateRoot(['new-product']);
  }
}
