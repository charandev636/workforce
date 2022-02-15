import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  bookingOrdersData : any;
  constructor(private nav: NavController,private router: Router) { }

  ngOnInit() {
    this.bookingOrdersData = ['1','2','3','4','5','6']
  } 
  bookOrder() {
    this.router.navigate(['addorders']);
  }
  goToHome(){
    this.nav.navigateRoot(['home']);
  }
}
