import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book-order',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.scss'],
})
export class BookOrderComponent implements OnInit {

  constructor(private nav: NavController,
    private router: Router,) { }
bookingOrdersData : any;
mainOrderData : any;
count = 2;


  ngOnInit() {
    this.bookingOrdersData = ['1','2','3']
    this.mainOrderData = ['1','2'];
  }
  viewSummery(){
    this.router.navigate(['ordersummery']);
  }

  
  goToHome(){
   
    this.router.navigate(['home']);
  }
}
