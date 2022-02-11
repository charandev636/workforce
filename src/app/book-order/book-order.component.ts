import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book-order',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.scss'],
})
export class BookOrderComponent implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {}

  goToHome(){
    this.nav.navigateRoot(['home']);
  }
}
