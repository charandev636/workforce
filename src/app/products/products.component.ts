import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  mainOrderData = ['1','2'];
  subProductsList = ['1','2','3'];

  constructor( private nav: NavController,private router: Router) { }

  ngOnInit() {}

  goToHome(){
    this.nav.navigateRoot(['home']);
  }
  bookOrder() {
    this.router.navigate(['bookorder']);
  }
}
